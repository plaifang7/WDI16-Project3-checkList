require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
const { UserModel, ListModel, ItemModel } = require('./schema')

// Item Model
const bdayItem1 = new ItemModel({
    itemName: 'Oxtail',
    img: 'https://www.koreanbapsang.com/wp-content/uploads/2017/03/DSC_1800-e1488857808976.jpg',
    checkedItem: false
})

const bdayItem2 = new ItemModel ({
    itemName:'Rice' ,
    img: 'https://www.publix.com/images/products/0/004818-600x600-A.jpg' ,
    checkedItem: false
})

const bdayItem3 = new ItemModel ({
    itemName:'Beans' ,
    img: 'https://www.unionpharmacymiami.com/wp-content/uploads/2014/04/Goya-Red-Kidney-Beans-Can-15_5-OZ.jpg' ,
    checkedItem: false
})

const bdayItem4 = new ItemModel ({
    itemName:'Cabbage' ,
    img: 'https://www.foodsforbetterhealth.com/wp-content/uploads/2017/02/cabbage.jpg' ,
    checkedItem: false
})

const weeklyItem = new ItemModel ({
    itemName:'Butter' ,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Stick-of-butter-salted.jpg/225px-Stick-of-butter-salted.jpg' ,
    checkedItem: false
})

const weeklyItem2 = new ItemModel ({
    itemName:'Paper Towel' ,
    img: 'http://www.sherisstoretodoor.com/wp-content/uploads/2015/10/Bounty-Select-A-Size-Paper-Towels-White-2-Big-Rolls.jpg' ,
    checkedItem: false
})

const weeklyItem3 = new ItemModel ({
    itemName:'Dish Soap' ,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81ppQ8Mm8FL._SX425_.jpg' ,
    checkedItem: false
})

const urgentItem = new ItemModel ({
    itemName: 'Toilet Paper',
    img: 'http://www.sherisstoretodoor.com/wp-content/uploads/2015/10/Bounty-Select-A-Size-Paper-Towels-White-2-Big-Rolls.jpg',
    checkedItem: false
})

// List Model
const bdayList = new ListModel ({
    storeName: 'Dekalb Farmers Market',
    listDate: 'July 25, 2018',
    listName: 'GGs Bday',
    items: [bdayItem1, bdayItem2, bdayItem3, bdayItem4]
})

const weeklyList = new ListModel ({
    storeName: 'Kroger',
    listDate: 'June 31, 2018',
    listName: 'Weekly Shopping',
    items: [weeklyItem, weeklyItem2, weeklyItem3, weeklyItem4 ]
})

const urgentList = new ListModel ({
    
})