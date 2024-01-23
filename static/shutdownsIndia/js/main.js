$('#branches').empty()
var states = {
    "Andhra Pradesh": "Andhra Pradesh",
    "Arunachal Pradesh": "Arunachal Pradesh",
    "Bihar": "Bihar",
    "Chhattisgarh": "Chhattisgarh",
    "Goa": "Goa",
    "Gujarat": "Gujarat",
    "Haryana": "Haryana",
    "Himachal Pradesh": "Himachal Pradesh",
    "Jharkhand": "Jharkhand",
    "Nagaland": "Nagaland",
    "Odisha": "Odisha",
    "Punjab": "Punjab",
    "Rajasthan": "Rajasthan",
    "Sikkim": "Sikkim",
    "Tamil Nadu": "Tamil Nadu",
    "Telangana": "Telangana",
    "Tripura": "Tripura",
    "Uttar Pradesh": "Uttar Pradesh",
    "Uttarakhand": "Uttarakhand",
    "West Bengal": "West Bengal",
    "Andaman Nicobar": "Andaman Nicobar",
    "Chandigarh": "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu": "Dadra and Nagar Haveli and Daman and Diu",
    "Jammu and Kashmir": "Jammu and kashmir",
    "Ladakh": "Ladakh",
    "Lakshadweep": "Lakshadweep",
    "Karnataka": "Karnataka",
    "Manipur": "Manipur",
    "NCT of Delhi": "NCT of Delhi",
    "Puducherry": "Puducherry",
    "Assam": "Assam",
    "Maharashtra": "Maharashtra",
    "Madhya Pradesh": "Madhya Pradesh",
    "Meghalaya": "Meghalaya"
}

var Puducherry =
    {
        "Yanam": "Yanam",
        "Puducherry": "Puducherry",
        "Mahé": "Mahé",
        "Karaikal": "Karaikal"
    }

var mySelect = $('#states');
//
$.each(states, function (key, value) {
    var $option = $("<option/>", {
        value: key,
        text: value
    });
    mySelect.append($option);
});


//districts
var Arunachal_Pradesh = {
    "Itanagar": "Itanagar",
    'Anjaw': 'Anjaw',
    'Changlang': 'Changlang',
    'Dibang Valley': 'Dibang Valley',
    'East Kameng': 'East Kameng',
    'East Siang': 'East Siang',
    'Kra Daadi': 'Kra Daadi',
    'Kurung Kumey': 'Kurung Kumey',
    'Lohit': 'Lohit',
    'Longding': 'Longding',
    'Lower Dibang Valley': 'Lower Dibang Valley',
    'Lower Siang': 'Lower Siang',
    'Lower Subansiri': 'Lower Subansiri',
    'Namsai': 'Namsai',
    'Papum Pare': 'Papum Pare',
    'Siang': 'Siang',
    'Tawang': 'Tawang',
    'Tirap': 'Tirap',
    'Upper Siang': 'Upper Siang',
    'Upper Subansiri': 'Upper Subansiri',
    'West Kameng': 'West Kameng',
    'West Siang': 'West Siang',
}
var Andaman_Nicobar = {
    "South Andaman": "South Andaman",
    "Nicobars": "Nicobars",
    "North and Middle Andaman": "North and Middle Andaman",
}
var Chandigarh = {
    "Chandigarh": "Chandigarh"
}

var Lakshadweep = {
    "Lakshadweep": "Lakshadweep",
}

var Dadra_and_Nagar_Haveli_and_Daman_and_Diu = {
    "Dadra and Nagar Haveli": "Dadra and Nagar Haveli",
    "Diu District": "Diu District",
    "Daman": "Daman"
}

var Andhra_Pradesh = {
    "Srikakulam": "Srikakulam",
    "Visakhapatnam": "Visakhapatnam",
    "Krishna": "Krishna",
    "Guntur": "Guntur",
    "Godavari": "Godavari",
    "Prakasam": "Prakasam",
    "Kurnool": "Kurnool",
    "Anantapur": "Anantapur",
    "Nellore": "Nellore",

    "Kadapa": "Kadapa",
    "Chittoor": "Chittoor",
    "Vizianagaram": "Vizianagaram",
}
var Nagaland = {
    "Zunheboto": "Zunheboto",
    "Wokha": "Wokha",
    "Tuensang": "Tuensang",
    "Phek": "Phek", "Longleng": "Longleng", "Kohima": "Kohima",
    "Peren": "Peren",
    "Mon": "Mon",
    "Mokokchung": "Mokokchung",
    "Kiphire": "Kiphire",
    "Dimapur": "Dimapur"


}
var Assam = {
    "Tinsukia": "Tinsukia",
    "Dhemaji": "Dhemaji",
    "Dibrugarh": "Dibrugarh",
    "Lakhimpur": "Lakhimpur",
    "Sivasagar": "Sivasagar",
    "Jorhat": "Jorhat",
    "Sonitpur": "Sonitpur",
    "Golaghat": "Golaghat",
    "Udalguri": "Udalguri",
    "Chirang": "Chirang",
    "Baksa": "Baksa",
    "Nagaon": "Nagaon",
    "Kokrajhar": "Kokrajhar",
    "Darrang": "Darrang",
    "Barpeta": "Barpeta",
    "Nalbari": "Nalbari",
    "Morigaon": "Morigaon",
    "Kamrup": "Kamrup",
    "Dhubri": "Dhubri",
    "Kamrup Metropolitan": "Kamrup Metropolitan",
    "Goalpara": "Goalpara",
    "Hasao": "Hasao",
    "Cachar": "Cachar",
    "Karimganj": "Karimganj",
    "Hailakandi": "Hailakandi",
    "Charaideo": "Charaideo",
    "Majuli": "Majuli",
    "Biswanath": "Biswanath",
    "Hojai": "Hojai",
    "Mankachar": "Mankachar",
    "Anglong": "Anglong",

    "Bongaigaon": "Bongaigaon",
};

var Bihar = {
    "West Champaran": "West Champaran",
    "East Champaran": "East Champaran",
    "Sitamarhi": "Sitamarhi",
    "Sheohar": "Sheohar",
    "Gopalganj": "Gopalganj",
    "Samastipur": "Samastipur",
    "Katihar": "Katihar",
    "Khagaria": "Khagaria",
    "Bhojpur": "Bhojpur",
    "Buxar": "Buxar",
    "Darbhanga": "Darbhanga",
    "Saharsa": "Saharsa",
    "Kaimur": "Kaimur",
    "Rohtas": "Rohtas",
    "Jamui": "Jamui",
    "Banka": "Banka",
    "Nawada": "Nawada",
    "Gaya": "Gaya",
    "Munger": "Munger",
    "Vaishali": "Vaishali",
    "Begusarai": "Begusarai",
    "Bhagalpur": "Bhagalpur",
    "Lakhisarai": "Lakhisarai",
    "Sheikhpura": "Sheikhpura",
    "Arwal": "Arwal",
    "Jehanabad": "Jehanabad",
    "Nalanda": "Nalanda",
    "Patna": "Patna",
    "Saran": "Saran",
    "Siwan": "Siwan",
    "Muzaffarpur": "Muzaffarpur",
    "Madhepura": "Madhepura",
    "Araria": "Araria",
    "Supaul": "Supaul",
    "Madhubani": "Madhubani",
    "Purnia": "Purnia",
    "Kishanganj": "Kishanganj",
    "Aurangabad": "Aurangabad",
    "Saran (chhapra)": "Saran (chhapra)",
    "Purvi Champaran": "Purvi Champaran",
    "Pashchim Champaran": "Pashchim Champaran",
}
var NCT_of_Delhi = {
    "New Delhi": "New Delhi",
    "Central Delhi": "Central Delhi",
    "East Delhi": "East Delhi",
    "North Delhi": "North Delhi",
    "North East Delhi": "North East Delhi",
    "North West Delhi": "North West Delhi",
    "South East Delhi": "South East Delhi",
    "South West Delhi": "South West Delhi",
    "South Delhi": "South Delhi",
    "West Delhi": "West Delhi",
    "Shahdara": "Shahdara",
}
var Chhattisgarh = {
    "Mahasamund": "Mahasamund",
    "Uttar Bastar Kanker": "Uttar Bastar Kanker",
    "Narayanpur": "Narayanpur",
    "Bastar Dantewada": "Bastar Dantewada",
    "Bastar": "Bastar",
    "Kondagaon": "Kondagaon",
    "Gariaband": "Gariaband",
    "Raipur": "Raipur",
    "Durg": "Durg",
    "Dhamtari": "Dhamtari",
    "Balod": "Balod",
    "Kabeerdham": "Kabeerdham",
    "Janjgir Champa": "Janjgir Champa",
    "Bametara": "Bametara",
    "Rajnandgaon": "Rajnandgaon",
    "Bazar": "Bazar",
    "Mungeli": "Mungeli",
    "Bijapur": "Bijapur",
    "Raigarh": "Raigarh",
    "Bilaspur": "Bilaspur",
    "Sukma": "Sukma",
    "Koriya": "Koriya",
    "Jashpur": "Jashpur",
    "Korba": "Korba",
    "Surguja": "Surguja",
    "Balrampur": "Balrampur",
    "Surajpur": "Surajpur",
}

var Goa = {
    "South Goa": "South Goa",
    "North Goa": "North Goa",
};

var Haryana = {
    "Ambala": "Ambala",
    "Bhiwani": "Bhiwani",
    "Charkhi Dadri": "Charkhi Dadri",
    "Faridabad": "Faridabad",
    "Fatehabad": "Fatehabad",
    "Gurugram": "Gurugram",
    "Hisar": "Hisar",
    "Jhajjar": "Jhajjar",
    "Jind": "Jind",
    "Kaithal": "Kaithal",
    "Karnal": "Karnal",
    "Kurukshetra": "Kurukshetra",
    "Mahendragarh": "Mahendragarh",
    "Nuh": "Nuh",
    "Mewat": "Mewat",
    "Palwal": "Palwal",
    "Panchkula": "Panchkula",
    "Panipat": "Panipat",
    "Rewari": "Rewari",
    "Rohtak": "Rohtak",
    "Sirsa": "Sirsa",
    "Sonipat": "Sonipat",
    "Yamunanagar": "Yamunanagar",
    "Jassia": "Jassia"
}

var Gujarat = {
    "Valsad": "Valsad",
    "Amreli": "Amreli",
    "Dang": "Dang",
    "Vadodara": "Vadodara",
    "Bharuch": "Bharuch",
    "Porbandar": "Porbandar",
    "Narmada": "Narmada",
    "Surat": "Surat",
    "Tapi": "Tapi",
    "Botad": "Botad",
    "Chhota Udaipur": "Chhota Udaipur",
    "Gir Somnath": "Gir Somnath",
    "Rajkot": "Rajkot",
    "Bhavnagar": "Bhavnagar",
    "Junagadh": "Junagadh",
    "Jamnagar": "Jamnagar",
    "Devbhumi Dwarka": "Devbhumi Dwarka",
    "Navsari": "Navsari",
    "Patan": "Patan",
    "Mehsana": "Mehsana",
    "Gandhinagar": "Gandhinagar",
    "Ahmedabad": "Ahmedabad",
    "Panchmahal": "Panchmahal",
    "Dahod": "Dahod",
    "Aravalli": "Aravalli",
    "Mahisagar": "Mahisagar",
    "Sabarkantha": "Sabarkantha",
    "Kachchh": "Kachchh",
    "Surendranagar": "Surendranagar",
    "Kheda": "Kheda",
    "Anand": "Anand",
    "Morbi": "Morbi",
    "Banaskantha": "Banaskantha",
    "Sabarkatha": "Sabarkatha",


}

var Himachal_Pradesh = {
    "Lahaul And Spiti": "Lahaul And Spiti",
    "Kangra": "Kangra",
    "Kullu": "Kullu",
    "Mandi": "Mandi",
    "Kinnaur": "Kinnaur",
    "Una": "Una",
    "Shimla": "Shimla",
    "Solan": "Solan",
    "Sirmaur": "Sirmaur",
    "Hamirpur": "Hamirpur",
    "Bilaspur": "Bilaspur",
    "Chamba": "Chamba",
};

var Jharkhand = {
    "Godda": "Godda",
    "Pakur": "Pakur",
    "Giridih": "Giridih",
    "Dumka": "Dumka",
    "Deoghar": "Deoghar",
    "Palamu": "Palamu",
    "Chatra": "Chatra",
    "Garhwa": "Garhwa",
    "Jamtara": "Jamtara",
    "Dhanbad": "Dhanbad",
    "Latehar": "Latehar",
    "Bokaro": "Bokaro",
    "Ramgarh": "Ramgarh",
    "Ranchi": "Ranchi",
    "Lohardaga": "Lohardaga",
    "Gumla": "Gumla",
    "Khunti": "Khunti",
    "Saraikela kharsawan": "Saraikela kharsawan",
    "East Singhbhum": "East Singhbhum",
    "West Singhbhum": "West Singhbhum",
    "Simdega": "Simdega",
    "Koderma": "Koderma",
    "Hazaribagh": "Hazaribagh",
    "Sahibganj": "Sahibganj",
}

var Jammu_and_Kashmir = {
    "Kupwara": "Kupwara",
    "Bandipora": "Bandipora",
    "Baramulla": "Baramulla",
    "Ganderbal": "Ganderbal",
    "Anantnag": "Anantnag",
    "Kishtwar": "Kishtwar",
    "Srinagar": "Srinagar",
    "Budgam": "Budgam",
    "Pulwama": "Pulwama",
    "Punch": "Punch",
    "Shopian": "Shopian",
    "Kulgam": "Kulgam",
    "Rajouri": "Rajouri",
    "Ramban": "Ramban",
    "Reasi": "Reasi",
    "Doda": "Doda",
    "Kathua": "Kathua",
    "Udhampur": "Udhampur",
    "Samba": "Samba",
    "Muzaffarabad": "Muzaffarabad",
    "Mirpur": "Mirpur",
    "Jammu": "Jammu",
    "Kashmir": "Kashmir"
}

var Karnataka = {
    "Bidar": "Bidar",
    "Kalaburagi": "Kalaburagi",
    "Belagavi": "Belagavi",
    "Yadgir": "Yadgir",
    "Bagalkote": "Bagalkote",
    "Raichur": "Raichur",
    "Koppal": "Koppal",
    "Gadag": "Gadag",
    "Ballari": "Ballari",
    "Dharwad": "Dharwad",
    "Uttara Kannada": "Uttara Kannada",
    "Haveri": "Haveri",
    "Chitradurga": "Chitradurga",
    "Davanagere": "Davanagere",
    "Shivamogga": "Shivamogga",
    "Udupi": "Udupi",
    "Chikkamagaluru": "Chikkamagaluru",
    "Chikkaballapura": "Chikkaballapura",
    "Hassan": "Hassan",
    "Kolar": "Kolar",
    "Bengaluru Rural": "Bengaluru Rural",
    "Dakshina Kannada": "Dakshina Kannada",
    "Bengaluru Urban": "Bengaluru Urban",
    "Kodagu": "Kodagu",
    "Chamarajanagara": "Chamarajanagara",
    "Tumakuru": "Tumakuru",
    "Ramanagara": "Ramanagara",
    "Mandya": "Mandya",
    "Mysuru": "Mysuru",
    "Vijayapura": "Vijayapura",
}

var Kerala = {
    "Kasaragod": "Kasaragod",
    "Wayanad": "Wayanad",
    "Kozhikode": "Kozhikode",
    "Malappuram": "Malappuram",
    "Thrissur": "Thrissur",
    "Idukki": "Idukki",
    "Ernakulam": "Ernakulam",
    "Alappuzha": "Alappuzha",
    "Kottayam": "Kottayam",
    "Pathanamthitta": "Pathanamthitta",
    "Kollam": "Kollam",
    "Thiruvananthapuram": "Thiruvananthapuram",
    "Kannur": "Kannur",
    "Palakkad": "Palakkad",
}

var Ladakh = {
    "Kargil": "Kargil",
    "Leh (ladakh)": "Leh (ladakh)",
    "Poonch": "Poonch"
}

var Madhya_Pradesh = {
    "Alirajpur": "Alirajpur",
    "Anuppur": "Anuppur",
    "Ashoknagar": "Ashoknagar",
    "Balaghat": "Balaghat",
    "Barwani": "Barwani",
    "Betul": "Betul",
    "Bhind": "Bhind",
    "Bhopal": "Bhopal",
    "Burhanpur": "Burhanpur",
    "Chandrapur": "Chandrapur",
    "Chhatarpur": "Chhatarpur",
    "Chhindwara": "Chhindwara",
    "Damoh": "Damoh",
    "Datia": "Datia",
    "Dewas": "Dewas",
    "Dhar": "Dhar",
    "Dindori": "Dindori",
    "Guna": "Guna",
    "Gwalior": "Gwalior",
    "Harda": "Harda",
    "Hoshangabad": "Hoshangabad",
    "Indore": "Indore",
    "Jabalpur": "Jabalpur",
    "Jhabua": "Jhabua",
    "Katni": "Katni",
    "Khandwa": "Khandwa",
    "Khargone": "Khargone",
    "Malwa": "Malwa",
    "Mandla": "Mandla",
    "Mandsaur": "Mandsaur",
    "Morena": "Morena",
    "Narsinghpur": "Narsinghpur",
    "Neemuch": "Neemuch",
    "Niwari": "Niwari",
    "Panna": "Panna",
    "Raisen": "Raisen",
    "Rajgarh": "Rajgarh",
    "Ratlam": "Ratlam",
    "Rewa": "Rewa",
    "Sagar": "Sagar",
    "Satna": "Satna",
    "Sehore": "Sehore",
    "Seoni": "Seoni",
    "Shahdol": "Shahdol",
    "Shajapur": "Shajapur",
    "Shivpuri": "Shivpuri",
    "Sidhi": "Sidhi",
    "Singrauli": "Singrauli",
    "Tikamgarh": "Tikamgarh",
    "Ujjain": "Ujjain",
    "Umaria": "Umaria",
    "Vidisha": "Vidisha",
}

var Maharashtra = {
    "Ahmednagar": "Ahmednagar",
    "Akola": "Akola",
    "Amravati": "Amravati",
    "Aurangabad": "Aurangabad",
    "Beed": "Beed",
    "Bhandara": "Bhandara",
    "Buldhana": "Buldhana",
    "Chandrapur": "Chandrapur",
    "Dhule": "Dhule",
    "Gadchiroli": "Gadchiroli",
    "Gondia": "Gondia",
    "Hingoli": "Hingoli",
    "Jalgaon": "Jalgaon",
    "Jalna": "Jalna",
    "Kolhapur": "Kolhapur",
    "Latur": "Latur",
    "Mumbai": "Mumbai",
    "Nagpur": "Nagpur",
    "Nanded": "Nanded",
    "Nandurbar": "Nandurbar",
    "Nashik": "Nashik",
    "Osmanabad": "Osmanabad",
    "Palghar": "Palghar",
    "Parbhani": "Parbhani",
    "Pune": "Pune",
    "Raigad": "Raigad",
    "Ratnagiri": "Ratnagiri",
    "Sangli": "Sangli",
    "Satara": "Satara",
    "Sindhudurg": "Sindhudurg",
    "Solapur": "Solapur",
    "Thane": "Thane",
    "Wardha": "Wardha",
    "Washim": "Washim",
    "Yavatmal": "Yavatmal",
    "Mumbai Suburban": "Mumbai Suburban"
}

var Manipur = {
    "Kamjong": "Kamjong",
    "Senapati": "Senapati",
    "Tamenglong": "Tamenglong",
    "West": "West",
    "Kakching": "Kakching",
    "Bishnupur": "Bishnupur",
    "Chandel": "Chandel",
    "Churachandpur": "Churachandpur",
    "Imphal East": "Imphal East",
    "Imphal West": "Imphal West",
    "Jiribam": "Jiribam",
    "Kangpokpi": "Kangpokpi",
    "Thoubal": "Thoubal",
    "Tengnoupal": "Tengnoupal",
    "Ukhrul": "Ukhrul",
    "Noney": "Noney",
    "Pherzawl": "Pherzawl",

}

var Meghalaya = {
    "West Jaintia Hills": "West Jaintia Hills",
    "East Jaintia Hills": "East Jaintia Hills",
    "Jaintia Hills": "Jaintia Hills",
    "East Khasi Hills": "East Khasi Hills",
    "West Khasi Hills": "West Khasi Hills",
    "South West Khasi Hills": "South West Khasi",
    "Ri-Bhoi": "Ri-Bhoi",
    "North Garo Hills": "North Garo Hills",
    "East Garo Hills": "East Garo Hills",
    "South Garo Hills": "South Garo Hills",
    "West Garo Hills": "West Garo Hills",
    "Garo Hills": "Garo Hills",
    "South West Garo Hills": "South West Garo",
}

var Odisha = {
    "Bhadrak": "Bhadrak",
    "Dhenkanal": "Dhenkanal",
    "Jajpur": "Jajpur",
    "Subarnapur": "Subarnapur",
    "Nuapada": "Nuapada",
    "Balangir": "Balangir",
    "Boudh": "Boudh",
    "Cuttack": "Cuttack",
    "Kandhamal": "Kandhamal",
    "Nayagarh": "Nayagarh",
    "Khordha": "Khordha",
    "Kalahandi": "Kalahandi",
    "Jagatsinghpur": "Jagatsinghpur",
    "Puri": "Puri",
    "Nabarangapur": "Nabarangapur",

    "Rayagada": "Rayagada",
    "Koraput": "Koraput",
    "Malkangiri": "Malkangiri",
    "Angul": "Angul",
    "Kendrapara": "Kendrapara",
    "Ganjam": "Ganjam",
    "Gajapati": "Gajapati",
    "Mayurbhanj": "Mayurbhanj",
    "Sundargarh": "Sundargarh",
    "Kendujhar": "Kendujhar",
    "Balasore": "Balasore",
    "Bargarh": "Bargarh",
    "Deogarh": "Deogarh",
    "Sambalpur": "Sambalpur",
    "Jharsuguda": "Jharsuguda",
}

var Rajasthan = {
    "Ajmer": "Ajmer",
    "Alwar": "Alwar",
    "Banswara": "Banswara",
    "Barmer": "Barmer",
    "Baran": "Baran",
    "Bharatpur": "Bharatpur",
    "Bhilwara": "Bhilwara",
    "Bikaner": "Bikaner",
    "Bundi": "Bundi",
    "Chittorgarh": "Chittorgarh",
    "Churu": "Churu",
    "Dausa": "Dausa",
    "Dholpur": "Dholpur",
    "Dungarpur": "Dungarpur",
    "Ganganagar": "Gangana",
    "Jalor": "Jalor",
    "Jaisalmer": "Jaisalmer",
    "Jhunjhunun": "Jhunjhunun",
    "Kota": "Kota",
    "Jaipur": "Jaipur",
    "Udaipur": "Udaipur",
    "Rajsamand": "Rajsamand",
    "Sirohi": "Sirohi",
    "Tonk": "Tonk",
    "Sikar": "Sikar",
    "Sawai Madhopur": "Sawai Madhopur",
    "Pali": "Pali",
    "Nagaur": "Nagaur",
    "Karauli": "Karauli",
    "Jodhpur": "Jodhpur",
    "Jhalawar": "Jhalawar",
    "Hanumangarh": "Hanumangarh"
}

var Sikkim = {
    "West Sikkim": "West Sikkim",
    "South Sikkim": "South Sikkim",
    "East Sikkim": "East Sikkim",
    "North Sikkim": "North Sikkim",
}

var Tamil_Nadu = {
    "Thiruvarur": "Thiruvarur",
    "Dindigul": "Dindigul",
    "Madurai": "Madurai",
    "Theni": "Theni",
    "Virudhunagar": "Virudhunagar",
    "Thoothukkudi": "Thoothukkudi",
    "Kanyakumari": "Kanyakumari",
    "Viluppuram": "Viluppuram",
    "Cuddalore": "Cuddalore",
    "Pudukkottai": "Pudukkottai",
    "Sivaganga": "Sivaganga",
    "Ramanathapuram": "Ramanathapuram",
    "Nagapattinam": "Nagapattinam",
    "Kallakurichi": "Kallakurichi",
    "Tenkasi": "Tenkasi",
    "Vellore": "Vellore",
    "Ranipet": "Ranipet",
    "Tirupathur": "Tirupathur",
    "Kancheepuram": "Kancheepuram",
    "Chengalpattu": "Chengalpattu",
    "Tirunelveli": "Tirunelveli",
}

var Telangana = {
    "Adilabad": "Adilabad",
    "Hyderabad": "Hyderabad",
    "Jagtial": "Jagtial",
    "Jangaon": "Jangaon",
    "Mulugu": "Mulugu",
    "Gadwal": "Gadwal",
    "Kamareddy": "Kamareddy",
    "Karimnagar": "Karimnagar",
    "Khammam": "Khammam",
    "Mahabubabad": "Mahabubabad",
    "Mahabubnagar": "Mahabubnagar",
    "Mancherial": "Mancherial",
    "Medak": "Medak",
    "Malkajgiri": "Malkajgiri",
    "Nagarkurnool": "Nagarkurnool",
    "Nalgonda": "Nalgonda",
    "Nirmal": "Nirmal",
    "Nizamabad": "Nizamabad",
    "Peddapalli": "Peddapalli",
    "Sircilla": "Sircilla",
    "Reddy": "Reddy",
    "Sangareddy": "Sangareddy",
    "Siddipet": "Siddipet",
    "Suryapet": "Suryapet",
    "Vikarabad": "Vikarabad",
    "Wanaparthy": "Wanaparthy",
    "Rural": "Rural",
    "Urban": "Urban",
    "Bhuvanagiri": "Bhuvanagiri",
    "Kothagudem": "Kothagudem",
    "Bhupalapally": "Bhupalapally",
    "Narayanpet": "Narayanpet",
    "Bheem": "Bheem",
}

var Uttarakhand = {
    "Uttarkashi": "Uttarkashi",
    "Chamoli": "Chamoli",
    "Dehradun": "Dehradun",
    "Tehri Garhwal": "Tehri Garhwal",
    "Rudraprayag": "Rudraprayag",
    "Pithoragarh": "Pithoragarh",
    "Bageshwar": "Bageshwar",
    "Pauri Garhwal": "Pauri Garhwal",
    "Almora": "Almora",
    "Nainital": "Nainital",
    "Champawat": "Champawat",
    "Udham Singh Nagar": "Udham Singh Nagar",
    "Haridwar": "Haridwar",
    "Faizabad": "Faizabad"
}

var Uttar_Pradesh = {
    "Amroha": "Amroha",
    "Hapur": "Hapur",
    "Bareilly": "Bareilly",
    "Pilibhit": "Pilibhit",
    "Bulandshahr": "Bulandshahr",
    "Gautam Buddha Nagar": "Gautam Buddha Nagar",
    "Lakhimpur Kheri": "Lakhimpur Kheri",
    "Budaun": "Budaun",
    "Bahraich": "Bahraich",
    "Shahjahanpur": "Shahjahanpur",
    "Aligarh": "Aligarh",
    "Kasganj": "Kasganj",
    "Mathura": "Mathura",
    "Shrawasti": "Shrawasti",
    "Sitapur": "Sitapur",
    "Hathras": "Hathras",
    "Etah": "Etah",
    "Hardoi": "Hardoi",
    "Farrukhabad": "Farrukhabad",
    "Firozabad": "Firozabad",
    "Siddharthnagar": "Siddharthnagar",
    "Mainpuri": "Mainpuri",
    "Maharajganj": "Maharajganj",
    "Agra": "Agra",
    "Gonda": "Gonda",
    "Barabanki": "Barabanki",
    "Kushinagar": "Kushinagar",
    "Kannauj": "Kannauj",
    "Lucknow": "Lucknow",
    "Basti": "Basti",
    "Gorakhpur": "Gorakhpur",
    "Nagar": "Nagar",
    "Unnao": "Unnao",
    "Etawah": "Etawah",

    "Auraiya": "Auraiya",
    "Ayodhya": "Ayodhya",
    "Dehat": "Dehat",
    "Deoria": "Deoria",
    "Sultanpur": "Sultanpur",

    "Bareli": "Bareli",
    "Jalaun": "Jalaun",
    "Azamgarh": "Azamgarh",
    "Mau": "Mau",
    "Fatehpur": "Fatehpur",
    "Ballia": "Ballia",
    "Jaunpur": "Jaunpur",
    "Jhansi": "Jhansi",
    "Banda": "Banda",
    "Ghazipur": "Ghazipur",
    "Kaushambi": "Kaushambi",
    "Prayagraj": "Prayagraj",
    "Varanasi": "Varanasi",
    "Chitrakoot": "Chitrakoot",
    "Chandauli": "Chandauli",
    "Bhadohi": "Bhadohi",
    "Mirzapur": "Mirzapur",
    "Lalitpur": "Lalitpur",
    "Sonbhadra": "Sonbhadra",
    "Amethi": "Amethi",
    "Ghaziabad": "Ghaziabad",
    "Sambhal": "Sambhal",
    "Mahoba": "Mahoba",
    "Saharanpur": "Saharanpur",
    "Bijnor": "Bijnor",
    "Muzaffarnagar": "Muzaffarnagar",
    "Baghpat": "Baghpat",
    "Meerut": "Meerut",
    "Moradabad": "Moradabad",
    "Rampur": "Rampur",
    "Balrampur": "Balrampur",
    "Hamirpur": "Hamirpur",
    "Pratapgarh": "Pratapgarh",
    "Shamli": "Shamli",
    "Kanpur Nagar": "Kanpur Nagar"
}

var West_Bengal = {
    "Alipurduar": "Alipurduar",
    "Bankura": "Bankura",
    "Birbhum": "Birbhum",
    "Cooch Behar": "Cooch Behar",
    "Darjeeling": "Darjeeling",
    "Hooghly": "Hooghly",
    "Howrah": "Howrah",
    "Jalpaiguri": "Jalpaiguri",
    "Jhargram": "Jhargram",
    "Kalimpong": "Kalimpong",
    "Kolkata": "Kolkata",
    "Malda": "Malda",
    "Murshidabad": "Murshidabad",
    "Nadia": "Nadia",
    "North 24 Parganas": "North 24 Parganas",
    "Paschim Bardhaman": "Paschim Bardhaman",
    "Paschim Medinipur": "Paschim Medinipur",
    "Purba Bardhaman": "Purba Bardhaman",
    "Purulia": "Purulia",
    "South 24 Parganas": "South 24 Parganas",
    "Uttar Dinajpur": "Uttar Dinajpur",
    "Dakshin Dinajpur": "Dakshin Dinajpur",
}

var Punjab = {
    "Amritsar": "Amritsar",
    "Barnala": "Barnala",
    "Bathinda": "Bathinda",
    "Faridkot": "Faridkot",
    "Fatehgarh Sahib": "Fatehgarh Sahib",
    "Muktsar Sahib": "Muktsar Sahib",
    "Firozpur": "Firozpur",
    "Fazilka": "Fazilka",
    "Gurdaspur": "Gurdaspur",
    "Hoshiarpur": "Hoshiarpur",
    "Jalandhar": "Jalandhar",
    "Kapurthala": "Kapurthala",
    "Ludhiana": "Ludhiana",
    "Mansa": "Mansa",
    "Moga": "Moga",
    "Sri Mukta Sahib": "Sri Mukta Sahib",
    "Pathankot": "Pathankot",
    "Patiala": "Patiala",
    "Rupnagar": "Rupnagar",
    "Sahibzada Ajit Singh Nagar": "Sahibzada Ajit Singh Nagar",
    "Sangrur": "Sangrur",
    "Shahid Bhagat Singh Nagar": "Shahid Bhagat Singh Nagar",
    "Tarn Taran": "Tarn Taran",
}

var Tripura =
    {
        "Dhalai": "Dhalai",
        "Sipahijala": "Sipahijala",
        "Khowai": "Khowai",
        "Gomati": "Gomati",
        "Unakoti": "Unakoti",
        "North Tripura": "North Tripura",
        "South Tripura": "South Tripura",
        "West Tripura": "West Tripura",
    }

//uuid function for unique id

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}


//code for on chanege add the district in the list
var selectedDistricts = []
$('#district').on('change', function () {
    if (!selectedDistricts.includes($(this).val())) {
        selectedDistricts.push($(this).val())
        uuidValue = uuidv4()
        document.getElementById("selected-districts").innerHTML += `<div id="${uuidValue}"> <input name="district" value="${$(this).val()}" id="disabled-input" readonly><span class="delete-btn" uuid="#${uuidValue}" value="${$(this).val()}" onclick="deleteItem('#${uuidValue}','${$(this).val()}')">X</span> </div>`
    } else {
        alert("District already selected")
    }
})

function deleteItem(id, value) {
    // console.log(value)
    if (selectedDistricts.includes(value)) {
        $(id).remove();
        // console.log(value)
        const index2 = selectedDistricts.indexOf(value);
        if (index2 > -1) {
            selectedDistricts.splice(index2, 1);
        }
    }
}


//
var finalList = []
var finalStates = []

var StatesObj = Object.keys(states) //to store keys of the states json

//code for extracting all districts and states array
//start
// var stateKeys = [];
// var districtKeys=[]
//    for(var k in states) stateKeys.push(k);
// for (let i = 0; i < stateKeys.length; i++) {
//     // console.log(window[stateKeys[i].replace(/ /g, '_')].length)
//     console.log()
//     let stat=window[stateKeys[i].replace(/ /g, '_')]
//     console.log(String(stat))
//     console.log(Object.keys([window[stat]]))
//     for (let j = 0; j < Object.keys(window[stateKeys[i].replace(/ /g, '_')]).length; j++) {
//         for(var l in window[stateKeys[i].replace(/ /g, '_')]) districtKeys.push(l);
//     }
// }
//after uncommenting this go to chrome console and use copy() method to copy the variable and use it anywhere
//end

$('#states').on('change', function () {
    selectedDistricts = []
    document.getElementById("selected-districts").innerHTML = ""
    for (let index = 0; index < StatesObj.length; index++) {
        if (StatesObj[index] == this.value) {
            $('#district').empty()
            // console.log(true)
            mySelect = $("#district")
            CreateSelection(window[this.value.replace(/ /g, '_')], mySelect)
        }
    }
});


function CreateSelection(target, mySelect) {
    mySelect.append('<option selected disabled>Select your district</option>')
    $.each(target, function (key, value) {
        var $option = $("<option/>", {
            value: key,
            text: value
        });
        mySelect.append($option);
    });
}