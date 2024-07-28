const mongoose=require("mongoose");//requiring the mongoose
const initData=require("./data.js");//requiring the data.js file in order to put in the data
const Listing=require("../models/listing.js");

//now creating and connecting with the database
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
main().then(()=>
{
    console.log("connected to the DB");
}).catch(err=>
{
    console.log(err);
});
async function main()
{
    await mongoose.connect(MONGO_URL);
}

const initDB=async()=>
{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner:"668ab4cc4eede678b92d68e2"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
};

initDB();