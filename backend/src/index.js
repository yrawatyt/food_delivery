const express = require('express');
const pricingRoutes = require('./routes/pricingroutes');
const cors=require('cors');


const app = express();
app.use(cors());
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/api', pricingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});