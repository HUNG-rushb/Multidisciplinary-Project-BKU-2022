const axios = require('axios');
const Type = require('../models/Type');

const getTypes = async () => {
  try {
    const response = await axios.get(
      'https://io.adafruit.com/api/v2/andrewquang/groups'
    );

    const responseTypes = response.data;

    responseTypes.map(async (eachType) => {
      if (eachType.name.includes('Type')) {
        const { key, id, name, description } = eachType;
        const types = await Type.find({ key: key });
        if (types.length === 0) {
          const newType = new Type({
            key: key,
            type_id: id,
            name: name,
            description: description == null ? '' : description,
          });
          await newType.save();
        }
      }
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getTypes;
