const express = require('express');
const router = express.Router();

const products = [
    {
        id: 1,
        image: "https://www.linkpicture.com/q/VintageTypewriter.png",
        name: "Vintage Typewriter to post awesome stories about UI design and webdev.",
        rate: 4.05,
        price: 49.50,
        description: "Eligible for Shipping To Mars or somewhere else"
    },
    {
        id: 2,
        image: "https://www.linkpicture.com/q/LeePucker.png",
        name: "Lee Pucker design. Leather botinki for handsome designers. Free shipping.",
        rate: 4.56,
        price: 13.95,
        description: "1258 bids, 359 watchers $5.95 for shipping"
    },
    {
        id: 3,
        image: "https://www.linkpicture.com/q/TimesavingKitten.png",
        name: "Timesaving kitten to save months on development. Playful, cute, cheap!",
        rate: 2.87,
        price: 128.99,
        description: "Eligible for nothing :("
    },
    {
        id: 4,
        image: "https://www.linkpicture.com/q/PlasticUseless.png",
        name: "Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!",
        rate: 4.99,
        price: 12.48,
        description: "Wordwide shitting available Buyers protection possible!"
    },
    {
        id: 5,
        image: "https://www.linkpicture.com/q/CreativityStimulating.png",
        name: "Creativity stimulating lotion. Drink every morning to generate better ideas!",
        rate: 3.44,
        price: 12.48,
        description: "Wordwide shifting available Buyers protection possible!"
    },
];

// GET request
router.get('/', (req, res, next) => {
    res.status(200).json(products);
});

module.exports = router;