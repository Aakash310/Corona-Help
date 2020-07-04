var request = require("request");
var express = require("express");
var router = express.Router({mergeParams:true});

var option1 = {
  method: 'GET',
  url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india',
  headers: {
    'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
    'x-rapidapi-key': '7bb66775f8msha771e4bf8242479p16a365jsn5e3d643af1dd',
    "useQueryString": true  
  }
};

router.get("/",function(req,res){
	request(option1, function (error, response, body) {
	if (!error && response.statusCode == 200){
		var parsedData = JSON.parse(body);
		var active_cases = parsedData.total_values.active;
		var total_recovered = parsedData.total_values.recovered;
		var deaths = parsedData.total_values.deaths;
	    res.render("home",{active_cases:active_cases,total_recovered:total_recovered,deaths:deaths});
	}
  });
});



router.get("/state-wise",function(req,res){
	request(option1, function (error, response, body) {
	if(!error && response.statusCode == 200){
		var parsedData = JSON.parse(body);
		
		var Maharashtra={
		confirmed:parsedData.state_wise["Maharashtra"].confirmed,
		recovered:parsedData.state_wise["Maharashtra"].recovered,
		deaths:parsedData.state_wise["Maharashtra"].deaths,
		}
		var Delhi={
		confirmed:parsedData.state_wise["Delhi"].confirmed,
		recovered:parsedData.state_wise["Delhi"].recovered,
		deaths:parsedData.state_wise["Delhi"].deaths,
		}
		var Tamil_Nadu={
		confirmed:parsedData.state_wise["Tamil Nadu"].confirmed,
		recovered:parsedData.state_wise["Tamil Nadu"].recovered,
		deaths:parsedData.state_wise["Tamil Nadu"].deaths,
		}
		var Rajasthan={
		confirmed:parsedData.state_wise["Rajasthan"].confirmed,
		recovered:parsedData.state_wise["Rajasthan"].recovered,
		deaths:parsedData.state_wise["Rajasthan"].deaths,
		}
		var Madhya_Pradesh={
		confirmed:parsedData.state_wise["Madhya Pradesh"].confirmed,
		recovered:parsedData.state_wise["Madhya Pradesh"].recovered,
		deaths:parsedData.state_wise["Madhya Pradesh"].deaths,
		}
		var Gujarat={
		confirmed:parsedData.state_wise["Gujarat"].confirmed,
		recovered:parsedData.state_wise["Gujarat"].recovered,
		deaths:parsedData.state_wise["Gujarat"].deaths,
		}
		var Uttar_Pradesh={
		confirmed:parsedData.state_wise["Uttar Pradesh"].confirmed,
		recovered:parsedData.state_wise["Uttar Pradesh"].recovered,
		deaths:parsedData.state_wise["Uttar Pradesh"].deaths,
		}
		var Telangana={
		confirmed:parsedData.state_wise["Telangana"].confirmed,
		recovered:parsedData.state_wise["Telangana"].recovered,
		deaths:parsedData.state_wise["Telangana"].deaths,
		}
		var Andhra_Pradesh={
		confirmed:parsedData.state_wise["Andhra Pradesh"].confirmed,
		recovered:parsedData.state_wise["Andhra Pradesh"].recovered,
		deaths:parsedData.state_wise["Andhra Pradesh"].deaths,
		}
		var Kerala={
		confirmed:parsedData.state_wise["Kerala"].confirmed,
		recovered:parsedData.state_wise["Kerala"].recovered,
		deaths:parsedData.state_wise["Kerala"].deaths,
		}
		var Karnataka={
		confirmed:parsedData.state_wise["Karnataka"].confirmed,
		recovered:parsedData.state_wise["Karnataka"].recovered,
		deaths:parsedData.state_wise["Karnataka"].deaths,
		}
		var Jammu_and_Kashmir={
		confirmed:parsedData.state_wise["Jammu and Kashmir"].confirmed,
		recovered:parsedData.state_wise["Jammu and Kashmir"].recovered,
		deaths:parsedData.state_wise["Jammu and Kashmir"].deaths,
		}
		var West_Bengal={
		confirmed:parsedData.state_wise["West Bengal"].confirmed,
		recovered:parsedData.state_wise["West Bengal"].recovered,
		deaths:parsedData.state_wise["West Bengal"].deaths,
		}
		var Haryana={
		confirmed:parsedData.state_wise["Haryana"].confirmed,
		recovered:parsedData.state_wise["Haryana"].recovered,
		deaths:parsedData.state_wise["Haryana"].deaths,
		}
		var Punjab={
		confirmed:parsedData.state_wise["Punjab"].confirmed,
		recovered:parsedData.state_wise["Punjab"].recovered,
		deaths:parsedData.state_wise["Punjab"].deaths,
		}
		var Bihar={
		confirmed:parsedData.state_wise["Bihar"].confirmed,
		recovered:parsedData.state_wise["Bihar"].recovered,
		deaths:parsedData.state_wise["Bihar"].deaths,
		}
		var Odisha={
		confirmed:parsedData.state_wise["Odisha"].confirmed,
		recovered:parsedData.state_wise["Odisha"].recovered,
		deaths:parsedData.state_wise["Odisha"].deaths,
		}
		var Uttarakhand={
		confirmed:parsedData.state_wise["Uttarakhand"].confirmed,
		recovered:parsedData.state_wise["Uttarakhand"].recovered,
		deaths:parsedData.state_wise["Uttarakhand"].deaths,
		}
		var Chhattisgarh={
		confirmed:parsedData.state_wise["Chhattisgarh"].confirmed,
		recovered:parsedData.state_wise["Chhattisgarh"].recovered,
		deaths:parsedData.state_wise["Chhattisgarh"].deaths,
		}
		var Himachal_Pradesh={
		confirmed:parsedData.state_wise["Himachal Pradesh"].confirmed,
		recovered:parsedData.state_wise["Himachal Pradesh"].recovered,
		deaths:parsedData.state_wise["Himachal Pradesh"].deaths,
		}
		var Assam={
		confirmed:parsedData.state_wise["Assam"].confirmed,
		recovered:parsedData.state_wise["Assam"].recovered,
		deaths:parsedData.state_wise["Assam"].deaths,
		}
		var Jharkhand={
		confirmed:parsedData.state_wise["Jharkhand"].confirmed,
		recovered:parsedData.state_wise["Jharkhand"].recovered,
		deaths:parsedData.state_wise["Jharkhand"].deaths,
		}
		var Chandigarh={
		confirmed:parsedData.state_wise["Chandigarh"].confirmed,
		recovered:parsedData.state_wise["Chandigarh"].recovered,
		deaths:parsedData.state_wise["Chandigarh"].deaths,
		}
		var Ladakh={
		confirmed:parsedData.state_wise["Ladakh"].confirmed,
		recovered:parsedData.state_wise["Ladakh"].recovered,
		deaths:parsedData.state_wise["Ladakh"].deaths,
		}
		var Andaman_and_Nicobar_Islands={
		confirmed:parsedData.state_wise["Andaman and Nicobar Islands"].confirmed,
		recovered:parsedData.state_wise["Andaman and Nicobar Islands"].recovered,
		deaths:parsedData.state_wise["Andaman and Nicobar Islands"].deaths,
		}
		var Meghalaya={
		confirmed:parsedData.state_wise["Meghalaya"].confirmed,
		recovered:parsedData.state_wise["Meghalaya"].recovered,
		deaths:parsedData.state_wise["Meghalaya"].deaths,
		}
		var Goa={
		confirmed:parsedData.state_wise["Goa"].confirmed,
		recovered:parsedData.state_wise["Goa"].recovered,
		deaths:parsedData.state_wise["Goa"].deaths,
		}
		var Puducherry={
		confirmed:parsedData.state_wise["Puducherry"].confirmed,
		recovered:parsedData.state_wise["Puducherry"].recovered,
		deaths:parsedData.state_wise["Puducherry"].deaths,
		}
		var Manipur={
		confirmed:parsedData.state_wise["Manipur"].confirmed,
		recovered:parsedData.state_wise["Manipur"].recovered,
		deaths:parsedData.state_wise["Manipur"].deaths,
		}
		var Tripura={
		confirmed:parsedData.state_wise["Tripura"].confirmed,
		recovered:parsedData.state_wise["Tripura"].recovered,
		deaths:parsedData.state_wise["Tripura"].deaths,
		}
		var Mizoram={
		confirmed:parsedData.state_wise["Mizoram"].confirmed,
		recovered:parsedData.state_wise["Mizoram"].recovered,
		deaths:parsedData.state_wise["Mizoram"].deaths,
		}
		var Arunachal_Pradesh={
		confirmed:parsedData.state_wise["Arunachal Pradesh"].confirmed,
		recovered:parsedData.state_wise["Arunachal Pradesh"].recovered,
		deaths:parsedData.state_wise["Arunachal Pradesh"].deaths,
		}
		var Nagaland={
		confirmed:parsedData.state_wise["Nagaland"].confirmed,
		recovered:parsedData.state_wise["Nagaland"].recovered,
		deaths:parsedData.state_wise["Nagaland"].deaths,
		}
		/*var Dadra_and_Nagar_Haveli={
		confirmed:parsedData.state_wise["Dadra and Nagar Haveli"].confirmed,
		recovered:parsedData.state_wise["Dadra and Nagar Haveli"].recovered,
		deaths:parsedData.state_wise["Dadra and Nagar Haveli"].deaths,
		}*/
		/*var Daman_and_Diu={
		confirmed:parsedData.state_wise["Daman and Diu"].confirmed,
		recovered:parsedData.state_wise["Daman and Diu"].recovered,
		deaths:parsedData.state_wise["Daman and Diu"].deaths,
		}*/
		var Lakshadweep={
		confirmed:parsedData.state_wise["Lakshadweep"].confirmed,
		recovered:parsedData.state_wise["Lakshadweep"].recovered,
		deaths:parsedData.state_wise["Lakshadweep"].deaths,
		}
		var Sikkim={
		confirmed:parsedData.state_wise["Sikkim"].confirmed,
		recovered:parsedData.state_wise["Sikkim"].recovered,
		deaths:parsedData.state_wise["Sikkim"].deaths,
		}
		var total={
		 total_confirmed:parsedData.total_values.confirmed,
		 total_recovered:parsedData.total_values.recovered,
		 deaths:parsedData.total_values.deaths,
		}
		
		var Passing = {Maharashtra:Maharashtra,Delhi:Delhi,Tamil_Nadu:Tamil_Nadu,Rajasthan:Rajasthan,Madhya_Pradesh:Madhya_Pradesh,Gujarat:Gujarat,Uttar_Pradesh:Uttar_Pradesh,Telangana:Telangana,Andhra_Pradesh:Andhra_Pradesh,Kerala:Kerala,Karnataka:Karnataka,Jammu_and_Kashmir:Jammu_and_Kashmir,West_Bengal:West_Bengal,Haryana:Haryana,Punjab:Punjab,Bihar:Bihar,Odisha:Odisha,Uttarakhand:Uttarakhand,Chhattisgarh:Chhattisgarh,Himachal_Pradesh:Himachal_Pradesh,Assam:Assam,Jharkhand:Jharkhand,Chandigarh:Chandigarh,Ladakh:Ladakh,Andaman_and_Nicobar_Islands:Andaman_and_Nicobar_Islands,Meghalaya:Meghalaya,Goa:Goa,Puducherry:Puducherry,Manipur:Manipur,Tripura:Tripura,Mizoram:Mizoram,Arunachal_Pradesh:Arunachal_Pradesh,Nagaland:Nagaland,Sikkim:Sikkim,Lakshadweep:Lakshadweep,total:total}
		
		res.render("state-wise",Passing);
	}
	});
});

module.exports = router;
