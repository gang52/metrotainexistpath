var app = angular.module('metroApp', []);

app.controller('MetroController', ['$scope', function($scope) {
    $scope.metroData = {
        "thomasmount": [
            "Platform no 1 - train towards Dr.M.G.R Central Metro",
            "CMRL parking - A1 entrance",
            "Lift no 1 - street to concourse"
        ],
        "alandur": [
            "Exit A - interchange with the Blue Line",
            "Lift A, B - lower platform towards Guindy, ADMS"
        ],
        "egmore": [
            "A1 - Egmore Railway",
            "A3 - Egmore Children's Hospital and Egmore F2 Police Station",
            "P1, P2 - towards Mount, and P2 for Central Metro",
            "B2 - Dina Thanthi, YWCA, HDFC Bank, Periyar Book House, Office of Commissioner Police, Lakshmi Hospital"
        ],
        "airport": [
            "A2 - suburban railway = A.M. Jain College and bus stop towards airport",
            "A1 - suburban railway station",
            "P1, P2 - towards airport, and P2 for Wimco Nagar and Central Metro",
            "B2 - bus stop Nanganallur >> post office"
        ],
        "governmentestate": [
            "A2 - Omandurar Multi Speciality Hospital and bus stop, Rajaji Hall and MLA Hostel, Napier Bridge and Doordarshan, Island Ground & Army Headquarters Dakshin Bharath",
            "A1 - Chindadaripet Railway Station and Simpson bus stop, Richie Street and Hindu Office, Por & Sons - MTC & SETC Headquarters, May Day Park, Mount Road",
            "P1, P2 - towards airport, and P2 for Wimco Nagar and Central Metro",
            "B1 - Walajah Road & Subway, Marina Beach, MA Chidambaram Cricket Stadium, Tamil Nadu Tourism, Omandurar Medical College Hospital, Kasthuribai Govt Medical College Hospital, Kalaivanar Arangam, Madras University, Ezhilagam",
            "B2 - Richie Street, Khadi Craft, Omandurar Medical College Hospital, Kasthuribai Govt Medical College Hospital, Kalaivanar Arangam, Madras University, Ezhilagam",
            "P1 - towards Chennai Airport and P2 - towards Wimco Nagar"
        ],
        "highcourt": [
            "A1 - High Court Building and Chennai Port",
            "A2 - George Town and Flower Bazaar",
            "P1, P2 - towards Wimco Nagar and Central Metro",
            "B1 - Beach Station and Law College"
        ],
        "annanagar":[
            "A1 - Apollo ClinicChinthamaniValliammal CollegeTowards Broadway Bus StopChai Kings",
            "A2 - Valliammal CollegeTowards Broadway Bus Stop",
            "A3 - Angels ShopMaruthi Suzuki Show RoomAmma Arangam",
            "b2 -  Krishna Sweet ShopMcRennett BakeryAnna Nagar RoundanaPost Office And Towards Anna Arch",
            "P1, P2 - towards airport & mount  and Central Metro",
            "B3 - Kandhaswamy CollegeSeashell Hotel",
            "b4 - TNSC BankAnna Nagar Tower ParkMcdonalds",
            "b5 - Penguin XeroxTanishqCromaKHM Hospital"

            
        ],
        "nehrupark":[
           "A1- Towards Flowers RoadEVR Periyar Road",
            "A2 - Metro ParkingMetro Bus StopHotel Abu PalaceIndusland Bank",
            "A3 - Sport Development Authority Of Tamil NaduChennai District libraryGengu Reddy SubwayFlower Road Post OfficeCorporation Of Chennai Diagnostic CentreCivil Supplies & Consumer protection Department",
            "b2 -  G3 Kilpauk Police StationOffice Of Deputy Commissioner Of PoliceTamil Nadu Police QuartersNLC India Limited",
            "P1, P2 - towards mount  and Central Metro",
            "B3 - Sangam Cinemaskumaran HospitalBreeze HotelThe Pride Hotel",
            "b4 - TNSC BankAnna Nagar Tower ParkMcdonalds",
            "b5 - Penguin XeroxTanishqCromaKHM Hospital",
            " B1- bus stop towards poonamalle >> nehru park "


        ],
        "ashokpillar":[
           " Gate No. C	ESI Hospital, Ashok Nagar Bus Stop, KK Nagar Bus Depot, BHEL Staff Quarters, Post Office Ashok Nagar, KV School, The Gokulam Park Hotel",
            "Gate No. D	ESI Hospital, Ashok Nagar Bus Stop, KK Nagar Bus Depot, BHEL Staff Quarters, Post Office Ashok Nagar, KV School, The Gokulam Park Hotel",
             "Gate No. E	ESI Hospital, Ashok Nagar Bus Stop, KK Nagar Bus Depot, BHEL Staff Quarters, Post Office Ashok Nagar, The Gokulam Park Hotel",
              "Gate No. F	Udhayam Theatre"
        ],
        "saidapet":[
            "Gate No. A1	Todd hunter Nagar, Animal Husbandary Department, Veterinary Poly clinic, P W D Govt. Quarters",
              "Gate No. A2	Saidapet Bus Stand, Tamilnadu Open University, Sub Registrar's Office, T.Nagar, YMCA",
              "Gate No. A3	Saidapet Bus Stand, Tamilnadu Open University, Sub Registrar's Office, T.Nagar, YMCA",
              "Gate No. B1	Govt.Model High School, Mother Teresa Women's University",
              "Gate No. B2	Govt.Model High School, Mother Teresa Women's University",
               "Gate No. B3	Subway, Bazaar Road, Jones Road, Usman Road, T.Nagar, District Registrar's office, Saidapet Bus Stand", 
               "Gate No. B4	Saidapet Bus Stand"

        ],
        "arumbakkam":[
            "Gate No. A	HDFC Bank, Dwaraka Doss Goverdhan Doss Vaishnav college, Annamal Institute Of Hotel Management, MMDA Colony, MMDA Bus Stop, Amirthavalli Hall, Hotel G",
             "Gate No. B	Aishwarya Mahal, Hotel Radha Regent, AR Rahman's KM college of Music And Technology, Hotel Le Club And Banquet, Chennai Park Inn, Arumbakkam MMDA Bus",
             "Gate No. C	HDFC Bank, Dwaraka Doss Goverdhan Doss Vaishnav college, Annamal Institute Of Hotel Management, MMDA Colony, MMDA Bus Stop, Amirthavalli Hall, Hotel G",
               "Gate No. D	SV High School Arumbakkam, Chennai Park Inn, Arumbakkam MMDA Bus Stop, Sowbhakiya Mahal"

        ],
        "koyambedu":[
         "Gate No. A	Towards Maduravoyal / Poonamalle, Towards Omni Bus Stand, Lanson Toyota Showroom",
          "Gate No. B	Koyambedu Omni Bus Stand, Koyambedu CMDA Building",
           "Gate No. C	CMRL Depot / Admin Building, Koyambedu Market, TNEB 230kv SS",
           "Gate No. D	Towards Kurungaleeswarar Temple, Towards Post Office",
            "Gate No. E	Rohini Theatre, VR Mall"
        ],
        "chennaiairport":[
            "Gate No. A	Aero Hub Mall (PVR Cinemas), Bus Stop - Towards Tambaram/Koyambedu/Chennai Central, Aero Hub (Food Court & Car Parking), GST Road, Tirusulam Railway S",
             "Gate No. B	Chennai International/Domestic Airport Terminals, Apollo Pharmacy, Aero Hub Mall (PVR Cinemas), AAI Staff Canteen, Aero Hub (Food Court & Car Parking)"
        ],
        "guindy":[
            " exist pathway ",
            "Gate No. A1	Guindy Railway Station, Guindy Industrial Estate Bus Stand, Guindy Race Course Bus Stop, Hotel Hablis, Guindy Industrial Estate, Race Course Ground, P"

        ],
        "thirumangalam": [
            "Gate No. A: Thirumangalam Junction, Mugappair West",
            "Gate No. B: VR Chennai Mall, Anna Nagar West.",
            "Gate No. C: Koyambedu Wholesale Market, SAF Games Village.",
            "Gate No. D: SBOA School & Junior College, Mogappair East."
        ],
        "thousandlights":[
            "A1	Bus Stop",	
"A2	Express Avenue, LIC",	
"A3	Express Avenue, LIC	Divyang Friendly",
"A4	Prestige Zackria Metropolitan, Spencer Plaza, TNEB",	
"B1	—",	
"B2	Apollo Hospital, British Council, Bus stop, Ibis Hotel, Towards Greams Road	",
"B3	Apollo Hospital, British Council, Bus stop, Ibis Hotel, Towards Greams Road"
        ],
        "agdms":[
            "Gate No. A1	DMS Office, DMS Bus Stop Towards Teynampet, Tamilnadu Welfare Board Office",
"Gate No. A2	Reserve Bank Staff College, Stella Maris College",
"Gate No. A3	Towards Mount Road Bus stop, Canara Bank, Courtyard Marriot, Semmozhi Poonga, Kamarajar Arangam",
"Gate No. B1	AG Office, Decathlon, Ramee Mall, Hyatt Residency, Anna Arivalayam / Kalaignar Arangam",
"Gate No. B2	Century Plaza",
"Gate No. B3	Century Plaza"
        ],
        "kaladipet":[
            "Gate No. E1	Kaladipet market, Revoor Padmanabha Chetty School, Bus Stop Towards Theradi, Suman Hospital, Varadharaja Perumal Temple",
"Gate No. E2	Rohit Hospital, Bus Stop Towards Tollgate, Ellai Amman Kovil, H8 Assistant Commissioner Police",
"Gate No. E3	Metro TURF"
        ],
        "kilpauk":[
            "Gate No. A1	Kilpauk Medical College, Fire Station, KKR Hospital, Bus Stop Towards Chennai Central",
"Gate No. A2	Apollo Hospital, Bus Stop Towards Koyambedu",
"Gate No. A3	Apollo Hospital, Bus Stop Towards Koyambedu",
"Gate No. B1	Kilpauk Hospital, ECO Park",
"Gate No. B2	VS Hospital, New Hope Hospital, EGA Theatre, Indian Overseas Bank",
"Gate No. B3	VS Hospital, New Hope Hospital, EGA Theatre, Indian Overseas Bank"
        ],
        "cmbt":[
            "Gate No. A	Omni Bus Stand, Koyambedu Market",
"Gate No. B	—",
"Gate No. C	K-11 Police Station, Apollo Clinic, Bus Stand, Election Commission, Jaints Park"
        ],
        "vadapalani":[
            "Gate No. A	SIMS Hospital, Vijaya Hospital",
"Gate No. B	NEXUS Mall, Vadapalani Bus Depot, Vijaya Hospital",
"Gate No. C	Murugan Temple, Vadapalani Post Office,Aarthi Scans",
"Gate No. D	Murugan Temple, Vadapalani Post Office,Aarthi Scans"
        ],
        "washermanpet":[
            "Gate No. A1	Suburban Railway Station, H1 Police Station",
"Gate No. A2	Dakshinamoorthy Kovil, Railway Quarters",
"Gate No. B1	—",
"Gate No. B2	Mint Bus Terminus, Mc Street - Whole Sale Textile Shop, Stanley Govt Hospital",
"Gate No. B3	—"
        ],
        "shenoynagar":
        [
            "Gate No. A1	Aminjikarai Signal, Aminjikarai Market, Sky Walk, Hande Hospital",
"Gate No. A2	Thiru Vi.Ka.Park, Corporation Regional Office, LibraryBus Stop, Billroth Hospital, Aminjikarai signal, Aminjikarai Market, Sky walk, Hande Hospital",
"Gate No. A3	Government School",
"Gate No. B1	Thiru.vi.ka Park, K3 Police Station, Skating park, Sinthamani Signal, Sai baba Temple, Towards Anna nagar East",
"Gate No. B2	Post Office",
"Gate No. B3	Thiru.vi.ka Park, Skating park"
        ],
        "nanganallur":[
            "Gate No. A1	Bus Stop, Saravana Bhavan, A2B, Radisson Blue Hotel",
            "Gate No. A2	Post Office Alandur, Sankarnethralaya Eye Hospital, St Mount Church"
        ],
    };
    $scope.selectedStation = '';
    $scope.exits = [];

    $scope.findExits = function() {
        const station = $scope.selectedStation.trim().toLowerCase(); // Convert input to lowercase for matching
        $scope.exits = $scope.metroData[station] || [];
    };
}]);
