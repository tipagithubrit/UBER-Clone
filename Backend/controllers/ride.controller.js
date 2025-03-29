const { json } = require('express');
const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');
const mapService = require('../services/maps.service')


module.exports.createRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { userId, pickup, destination, vehicleType } = req.body;

  try {
    const ride = await rideService.createRide({ user: req.user._id, pickup, destination, vehicleType })
    // res.status(201).json(ride);

    const pickupCoordinates = await mapService.getAddressCoordinate(pickup)
    console.log("Pickup Coordinates:", pickupCoordinates);


    const captainInRadius = await mapService.getCaptainsInTheRadius(pickupCoordinates.ltd, pickupCoordinates.lng, 2)
    console.log(captainInRadius)



    return res.status(201).json(ride);
  } catch (err) {
    return res.status(500).json({ message: err.message })

  }

};


module.exports.getFare = async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { pickup, destination } = req.query;

  try {
    const fare = await rideService.getFare(pickup, destination);
    return res.status(200).json(fare)

  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

}
