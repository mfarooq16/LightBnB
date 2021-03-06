const properties = require('./json/properties.json');
const users = require('./json/users.json');
const bcrypt = require('bcrypt');

/// Users
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});


/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  const queryString = `
  SELECT *
  FROM users
  WHERE email = $1;
  `;
  const values = [email];

  return pool.query(queryString, values)
    .then(res => {
      if (res.rows.length) {
        //console.log(res.rows[0])
        return res.rows[0];
      } else {
        return null;
      }
    })
    .catch(err => console.error('query error', err.stack));
  /*let user;
  for (const userId in users) {
    user = users[userId];
    if (user.email.toLowerCase() === email.toLowerCase()) {
      break;
    } else {
      user = null;
    }
  }
  return Promise.resolve(user);
  */
};
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  const queryString = `
  SELECT *
  FROM users
  WHERE id = $1;
  `;
  const values = [id];

  return pool.query(queryString, values)
    .then(res => {
      if (res.rows.length) {
        //console.log(res.rows[0])
        return res.rows[0];
      } else {
        return null;
      }
    })
    .catch(err => console.error('query error', err.stack));
  //return Promise.resolve(users[id]);
};
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  
  const name = user.name;
  const email = user.email;
  const hashedPassword = bcrypt.hashSync(user.password, 10);
  
  const queryString = `
  INSERT INTO users (name, email, password)
  VALUES($1, $2, $3)
  RETURNING *;
  `;

  const values = [name, email, hashedPassword];

  return pool.query(queryString, values)
    .then(res => {
      if (res.rows.length) {
        //console.log(res.rows);
        return res.rows[0];
      } else {
        return null;
      }
    })
    .catch(err => console.error('query error', err.stack));
  
  /*
  const userId = Object.keys(users).length + 1;
  user.id = userId;
  users[userId] = user;
  return Promise.resolve(user);
  */
};
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {

  
  const queryString = `
  SELECT properties.*, reservations.*, AVG(rating) AS average_rating
  FROM reservations
  JOIN properties ON reservations.property_id = properties.id
  JOIN property_reviews ON properties.id = property_reviews.property_id 
  WHERE reservations.guest_id = $1
  AND reservations.end_date < now()::date
  GROUP BY properties.id, reservations.id
  ORDER BY reservations.start_date
  LIMIT $2;
  `;

  const values = [guest_id, limit];

  return pool.query(queryString, values)
    .then(res => {
      if (res.rows.length) {
        console.log(res.rows);
        return res.rows;
      } else {
        return null;
      }
    })
    .catch(err => console.error('query error', err.stack));


  //return getAllProperties(null, 2);
};
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {

  // 1
  const queryParams = [];
  // 2
  let queryString = `
    SELECT properties.*, avg(property_reviews.rating) as average_rating
    FROM properties
    JOIN property_reviews ON properties.id = property_id
    `;
    // 3
  if (options.city) {
    queryParams.push(`%${options.city}%`);
    queryString += `WHERE city LIKE $${queryParams.length} `;
  }

  if (options.owner_id) {
    queryParams.push(options.owner_id);
      
    if (!queryString.includes("WHERE")) {
      queryString += `WHERE`;
    } else {
      queryString += 'AND';
    }
    queryString += ` owner_id = $${queryParams.length} `;
  }

  if (options.minimum_price_per_night) {
    queryParams.push(parseInt(options.minimum_price_per_night));
  
    if (!queryString.includes("WHERE")) {
      queryString += `WHERE`;
    } else {
      queryString += 'AND';
    }
    queryString += ` cost_per_night >= $${queryParams.length} `;
  }

  if (options.maximum_price_per_night) {
    queryParams.push(parseInt(options.maximum_price_per_night));
  
    if (!queryString.includes("WHERE")) {
      queryString += `WHERE`;
    } else {
      queryString += 'AND';
    }
    queryString += ` cost_per_night <= $${queryParams.length} `;
  }

  if (options.minimum_rating) {
    queryParams.push(parseInt(options.minimum_rating));

    if (!queryString.includes("WHERE")) {
      queryString += `WHERE`;
    } else {
      queryString += 'AND';
    }
    queryString += ` rating >= $${queryParams.length} `;
  }

  // 4
  queryParams.push(limit);
  queryString += `
    GROUP BY properties.id
    ORDER BY cost_per_night
    LIMIT $${queryParams.length};
    `;
  // 5
  console.log(queryString, queryParams);
  // 6
  return pool.query(queryString, queryParams)
    .then(res => {
      if (res.rows.length) {
        return res.rows;
      } else {
        return null;
      }
    })
    .catch(err => console.error('query error', err.stack));

  /*
  return pool.query(`
  SELECT * FROM properties
  LIMIT $1
  `, [limit])
    .then(res => res.rows);
  */
  /*
  const limitedProperties = {};
  for (let i = 1; i <= limit; i++) {
    limitedProperties[i] = properties[i];
  }
  return Promise.resolve(limitedProperties);
  */
};
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const {owner_id,
    title,
    description,
    thumbnail_photo_url,
    cover_photo_url,
    cost_per_night,
    street,
    city,
    province,
    post_code,
    country,
    parking_spaces,
    number_of_bathrooms,
    number_of_bedrooms} = property;
  
  const queryString = `
  INSERT INTO properties (owner_id,
    title,
    description,
    thumbnail_photo_url,
    cover_photo_url,
    cost_per_night,
    street,
    city,
    province,
    post_code,
    country,
    parking_spaces,
    number_of_bathrooms,
    number_of_bedrooms)
  VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
  RETURNING *;
  `;

  const values = [parseInt(owner_id),
    title,
    description,
    thumbnail_photo_url,
    cover_photo_url,
    cost_per_night,
    street,
    city,
    province,
    post_code,
    country,
    parseInt(parking_spaces),
    parseInt(number_of_bathrooms),
    parseInt(number_of_bedrooms)];

  return pool.query(queryString, values)
    .then(res => {
      if (res.rows.length) {
        return res.rows[0];
      } else {
        return null;
      }
    })
    .catch(err => console.error('query error', err.stack));

  /*
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
  */
};
exports.addProperty = addProperty;
