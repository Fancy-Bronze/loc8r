const mongoose = require('mongoose');

const openingTimeSchema = new mongoose.Schema({
  days: {
    type: String,
    required: true    // 요일 정보는 필수
  },
  opening: String,    // 여는 시간
  closing: String,    // 닫는 시간
  closed: {
    type: Boolean,
    required: true    // 닫힘 여부는 반드시 true/false 필요
  }
});

const reviewSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  reviewText: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    'default': Date.now
  }
});



const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
  },
  facilities: [String],
  coords: {
    type: { type: String },
    coordinates: [Number]
  },
  openingTimes: [openingTimeSchema],
  reviews: [reviewSchema]
});


// GeoJSON 공간 인덱스 생성
locationSchema.index({ coords: '2dsphere' });

mongoose.model('Location', locationSchema)
