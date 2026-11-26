let firstTime = true

if(localStorage.getItem("money")){
    firstTime = false
}

//VARIABLER
//header

let moneydisplay = document.querySelector(".moneydisplay");
let totvaluedisplay = document.querySelector(".valuedisplay");
let resetdisplay = document.querySelector(".resetdisplay");

//sidebar
let sidebarlinks = document.querySelectorAll(".sidebar a");

let dashboardlink = document.querySelector(".dashboard");
let businesseslink = document.querySelector(".businesses");
let uppgradeslink = document.querySelector(".uppgrades");
let economylink = document.querySelector(".economy");
let settingslink = document.querySelector(".settings");

//companycards

let companycard = document.querySelectorAll(".companycard")

let schoolcard = document.getElementById("school");
let storecard = document.getElementById("store");
let factorycard = document.getElementById("factory");
let bakerycard = document.getElementById("bakery");
let warehousecard = document.getElementById("warehouse");
let bankcard = document.getElementById("bank");

//inspbtns

let schoolinsp = document.getElementById("schoolinsp");
let storeinsp = document.getElementById("storeinsp");
let factoryinsp = document.getElementById("factoryinsp");
let bakeryinsp = document.getElementById("bakeryinsp");
let warehouseinsp = document.getElementById("warehouseinsp");
let bankinsp = document.getElementById("bankinsp");

//overlay

let overlay = document.querySelector(".overlay");
let exitbtn = document.querySelector(".exit");
let popupcompanyname = document.querySelector(".companyname");
let buildbtn = document.querySelector(".cardbtn")
let popupimg = document.querySelector(".popupimg");
let popupcost = document.getElementById("cost");
let popupbuildtime = document.getElementById("Buildtime");
let popupincome = document.getElementById("income")

//companys

let school ={
    name: "School",
    buildtime: 3,
    img: "school.png",
    price: 5000,
    income: Number(localStorage.getItem("schoolincome")) || 800,
    inspbutton: schoolinsp,
    value: Number(localStorage.getItem("schoolvalue")) || 5000,
    earned: 0,
    activity: "Interest boost",
    beskrivning: "Improves your financial knowledge and investment strategies, increasing your company's income through better financial decisions."
} 

let store ={
    name: "Store",
    buildtime: 30,
    img: "store.png",
    price: 15000,
    income: Number(localStorage.getItem("storeincome")) || 1200,
    inspbutton: storeinsp,
    value: Number(localStorage.getItem("storevalue")) || 15000,
    earned: 0,
    activity: "Marketing boost",
    beskrivning: "Attracts more customers through better marketing, increasing your company's sales and income."
}

let factory ={
    name: "Factory",
    buildtime: 90,
    img: "factory.png",
    price: 40000,
    income: Number(localStorage.getItem("factoryincome")) || 2000,
    inspbutton: factoryinsp,
    value: Number(localStorage.getItem("factoryvalue")) || 40000,
    earned: 0,
    activity: "Productivity boost",
    beskrivning: "Increases your company's productivity, allowing employees to work faster and generate more income." 
}

let bakery ={
    name: "Bakery",
    buildtime: 180,
    img: "bakery.png",
    price: 70000,
    income: Number(localStorage.getItem("bakeryincome")) || 4500,
    inspbutton: bakeryinsp,
    value: Number(localStorage.getItem("bakeryvalue")) || 80000,
    earned: 0,
    activity: "Productivity boost",
    beskrivning: "Increases your company's productivity, allowing employees to work faster and generate more income."
}

let warehouse ={
    name: "Warehouse",
    buildtime: 300,
    img: "warehouse.png",
    price: 200000,
    income: Number(localStorage.getItem("warehouseincome")) || 8000,
    inspbutton: warehouseinsp,
    value: Number(localStorage.getItem("warehousevalue")) || 100000,
    earned: 0,
    activity: "Capacity boost",
    beskrivning: "Expands your company's storage and operational capacity, allowing it to handle more business and generate more income."
}

let bank={
    name: "Bank",
    buildtime: 600,
    img: "bank.png",
    price: 500000,
    income: Number(localStorage.getItem("bankincome")) || 10000,
    inspbutton: bankinsp,
    value: Number(localStorage.getItem("bankvalue")) || 200000,
    earned: 0,
    activity: "Marketing boost",
    beskrivning: "Attracts more customers through better marketing, increasing your company's sales and income."
}

let ownedCompanies = JSON.parse(localStorage.getItem("ownedCompanies")) || [];

let allCompanies = [school, store, factory, bakery, warehouse, bank];

allCompanies.forEach(company => {
    if (ownedCompanies.some(c => c.name === company.name)) {

        if(!company.inspbutton) return;

        company.inspbutton.disabled = true;
        company.inspbutton.innerHTML = "Owned!"

        let card = document.getElementById(company.name.toLowerCase());
        
        if(card) {
            card.classList.add("owned");
        }
    }
});

//user

let user = {
    money: Number(localStorage.getItem("money")) || 0,
    totvalue: Number(localStorage.getItem("value")) || 0,
    totearned: Number(localStorage.getItem("totearned")) || 0,
    totexpenses: Number(localStorage.getItem("totexpenses")) || 0,
    reboots: Number(localStorage.getItem("reboots")) || 0
};

if(firstTime === true){
    user.money = 15000
    localStorage.setItem("money", 15000)
}

let BuildsInProgress =JSON.parse(localStorage.getItem("BuildsInProgress")) || [];

BuildsInProgress.forEach(build => {
    let company = allCompanies.find(c => c.name === build.name);

    if(company.inspbutton) {
        company.inspbutton.disabled = true;
    }
})

let userincome = Number(localStorage.getItem("income")) || 0;

// businesscontent 

let businesscontent = document.querySelector(".businesscontent")

//productivity

let productivityTime = 120000;

// uppgrades

let uppgradebuttons = document.querySelectorAll(".uppgradebtn");
let uppgradesoverlay = document.querySelector(".uppgradesoverlay")
let uppgardename = document.querySelector(".uppgradename")
let uppgradeP = document.querySelector("#uppgradetext")

let incomeratebtn = document.getElementById("incomeratebtn")
let uppgrades = [

    { name: "Income Rate", cost: 10000, btn: document.getElementById("incomeratebtn"), active: false, infobtn: document.getElementById("incomeinfo")},

    { name: "Faster Payments", cost: 20000, btn: document.getElementById("fasterpaymentsbtn"), active: false, infobtn: document.getElementById("fatserinfo")},

    { name: "Faster Payments 2", cost: 50000, btn: document.getElementById("fasterpayments2btn"), active: false, infobtn: document.getElementById("fasterinfo2")},

    { name: "Marketing Campaign", cost: 30000, btn: document.getElementById("marketingcampaignbtn"), active: false, infobtn: document.getElementById("marketinginfo") },

    { name: "Business Expansion", cost: 40000, btn: document.getElementById("businessexpansionbtn"), active: false, infobtn: document.getElementById("expansioninfo")},

    { name: "Employee Motivation", cost: 30000, btn: document.getElementById("employeemotivationbtn"), active: false, infobtn: document.getElementById("motivationinfo")}
];

let activeuppgrades = JSON.parse(localStorage.getItem("activeuppgrades")) || [];
let infobuttons = document.querySelectorAll(".info")

// Economy

let companiesOwnedText = document.getElementById("companiesOwned");
let totalEarnedText = document.getElementById("totalEarned");
let totalValueText = document.getElementById("totalValue");
let totalHourlyIncomeText = document.getElementById("totalHourlyIncome");
let totalExpensesText = document.getElementById("totalExpenses");
let activitiesActiveText = document.getElementById("activitiesActive");
let uppgradesActiveText = document.getElementById("uppgradesActive");

// Settings

let confirmPurchase = document.getElementById("autoconfirm");

let colorTemplate = document.getElementById("colorTemplate");

let textcolor = document.getElementById("textcolor");
let backgroundcolor = document.getElementById("backgroundcolor");
let glow = document.getElementById("glow");
let boxes = document.getElementById("boxes");
let purchased = document.getElementById("purchased");
let headerAndSidebar = document.getElementById("header_sidebar")
let activesidebar = document.getElementById("sidebaractive")

const defaultsettings = {
    confirmPurchase: true,
    colorTemplate: "Default",
    textcolor: "#ffffff",
    backgroundcolor: "#161616",
    glow: "#00ffff",
    boxes: "#000000",
    purchased: "#008000",
    headerAndSidebar: "#000000",
    activesidebar: "#308888"
};

const currentsettings = JSON.parse(localStorage.getItem("settings")) || {
    confirmPurchase: localStorage.getItem("autoconfirm") !== "false",
    colorTemplate: localStorage.getItem("colorTemplate") || "Default",
    textcolor: localStorage.getItem("textcolor") || "#ffffff",
    backgroundcolor: localStorage.getItem("backgroundcolor") || "#161616",
    glow: localStorage.getItem("glow") || "#00ffff",
    boxes: localStorage.getItem("boxes") || "#000000",
    purchased: localStorage.getItem("purchased") || "#008000",
    headerAndSidebar: localStorage.getItem("headerAndSidebar") || "#000000",
    activesidebar: localStorage.getItem("activesidebar") || "#308888"
};

const templates = {

    Default: {
        textcolor: "#ffffff",
        backgroundcolor: "#161616",
        glow: "#00ffff",
        boxes: "#000000",
        purchased: "#008000",
        headerAndSidebar: "#000000",
        activesidebar: "#308888"
    },

    red: {
        textcolor: "#ffffff",
        backgroundcolor: "#1a0808",
        glow: "#ff3333",
        boxes: "#260000",
        purchased: "#ce6809",
        headerAndSidebar: "#120000",
        activesidebar: "#992222"
    },

    blue: {
        textcolor: "#ffffff",
        backgroundcolor: "#080f1a",
        glow: "#3399ff",
        boxes: "#00152b",
        purchased: "#1ac7da",
        headerAndSidebar: "#050b14",
        activesidebar: "#205f99"
    },


    pink: {
        textcolor: "#ffffff",
        backgroundcolor: "#1a0814",
        glow: "#ff66cc",
        boxes: "#260019",
        purchased: "#eb1add",
        headerAndSidebar: "#12000b",
        activesidebar: "#993d7a"
    },

    green: {
        textcolor: "#ffffff",
        backgroundcolor: "#081a0d",
        glow: "#33ff66",
        boxes: "#00260a",
        purchased: "#008000",
        headerAndSidebar: "#001205",
        activesidebar: "#007a3d"
    }
};

let resetSettingsbtn = document.getElementById("settingsReset")
let resetProgressBtn = document.getElementById("progressReset")

// other

let activitycost = 5000
let activityprocentage = 1.05;
let currentcompany;
let paytime = localStorage.getItem("paytime") || 60000;
let lastPayTime = Number(localStorage.getItem("lastPayTime")) || Date.now();
let paytimeminutes = paytime / 1000 + "s";
let earnednumber;
let activatebtn;
let incomePerHourNumber;

let economycard = document.querySelector(".economycard");
let activitiescard = document.querySelector(".activitycard")
//MAIN

//update on login
sortownedcompanies();
displayownedcompanies();
updateuser();
updateIncome();

// functions

function displayoverlay(companyname, img, buildtime, price, income, inspbutton, value) {

    let newbuildtime;

    if (buildtime < 60) {
        newbuildtime = buildtime + " s";
    } 
    else if (buildtime < 3600) {
        newbuildtime = (buildtime / 60) + " min";
    }
    else {
        newbuildtime = (buildtime / 3600) + " h";
    }

    currentcompany = {
        name: companyname,
        buildtime: buildtime,
        income: income,
        cost: price,
        value: value,
        inspbutton: inspbutton
    };

    overlay.style.display = "flex";

    popupcompanyname.innerHTML = companyname;
    popupbuildtime.innerHTML = newbuildtime;
    popupimg.src = img;
    popupcost.innerHTML = price + "€";
    popupincome.innerHTML = income + "€/" + paytimeminutes;
}

function updateCountdown() {

    let build = BuildsInProgress[0];
    if (!build) return;

    let endtime = build.endtime;

    let company = [school, store, factory, bakery, warehouse, bank]
        .find(c => c.name === build.name);

    if (!company) return;

    let timeleft = Math.max(0, endtime - Date.now() / 1000);

    if (timeleft <= 0) {

        if (company.inspbutton) {
            company.inspbutton.innerHTML = "Owned!";
            company.inspbutton.disabled = true;
        }

        let card = document.getElementById(company.name.toLowerCase());

        if (card) {
            card.classList.add("owned");
        }

        ownedCompanies.push({
            name: company.name,
            buildtime: company.buildtime,
            img: company.img,
            price: company.price,
            income: company.income,
            value: company.value,
            earned: company.earned || 0,
            activity: company.activity,
            beskrivning: company.beskrivning,
            active: false
        });

        localStorage.setItem("ownedCompanies", JSON.stringify(ownedCompanies));

        updateTotalValue();
        updateIncome();

        BuildsInProgress = [];
        localStorage.setItem("BuildsInProgress", JSON.stringify(BuildsInProgress));

        return;
    }

    let hours = Math.floor(timeleft / 3600);
    let minutes = Math.floor((timeleft % 3600) / 60);
    let seconds = Math.floor(timeleft % 60);

    let countdown =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

    if (company.inspbutton) {
        company.inspbutton.innerHTML = "Building! " + countdown;
    }
}

function updateuser(){
    moneydisplay.innerHTML = user.money
    totvaluedisplay.innerHTML = user.totvalue
    resetdisplay.innerHTML = user.reboots

    localStorage.setItem("money", user.money);
    localStorage.setItem("value", user.totvalue);
    localStorage.setItem("totearned", user.totearned);
    localStorage.setItem("totexpenses", user.totexpenses);
}

function buycompany(){

    overlay.style.display = "none"

    let endtime = Date.now() / 1000 + currentcompany.buildtime;
    localStorage.setItem(currentcompany.name + "end", endtime);

    user.money -= currentcompany.cost;
    user.totexpenses += currentcompany.cost;
    user.totvalue += currentcompany.value;

    updateuser();

    let starttime = Date.now();
    localStorage.setItem("starttime", starttime)

    BuildsInProgress.push({
        name: currentcompany.name,
        endtime: endtime
    }) 

    currentcompany.inspbutton.disabled = true;

    localStorage.setItem("BuildsInProgress", JSON.stringify(BuildsInProgress))

    updateCountdown();
}

function updateTotalValue() {

    user.totvalue = 0;

    ownedCompanies.forEach(company => {
        user.totvalue += company.value;
    });

    updateuser();
}

function updateIncome() {
    userincome = 0;

    ownedCompanies.forEach(company => {
        userincome += company.income;
    });


    localStorage.setItem("income", userincome);
}

function earnMoney() {

    let currentTime = Date.now();
    let timePassed = currentTime - lastPayTime;

    let payments = Math.floor(timePassed / paytime);

    if(payments >= 1) {

        user.money += userincome * payments;
        user.totearned += userincome * payments;

        ownedCompanies.forEach(company => {
            company.earned += company.income * payments;
        });

        lastPayTime += payments * paytime;

        localStorage.setItem("lastPayTime", lastPayTime);
        localStorage.setItem("ownedCompanies", JSON.stringify(ownedCompanies));

        updateuser();
    }
}

earnMoney();
setInterval(earnMoney, 1000);

function displayownedcompanies(){

    let maincontent = document.querySelector(".maincontent");

    if(!maincontent) return;
    if(!businesscontent) return;
    if(ownedCompanies.length === 0) {
        let h4 = document.createElement("h4");
        h4.textContent = "You do not own any companies yet!";
        maincontent.appendChild(h4)
        return;
    }

    businesscontent.innerHTML = "";


    ownedCompanies.forEach(ownedcompany => {
        let card = document.createElement("div");
        card.classList.add("card");

        let name = document.createElement("p");
        name.classList.add("name")
        name.textContent = ownedcompany.name;

        let img = document.createElement("img");
        img.src = ownedcompany.img;

        let link = document.createElement("a");
        link.href = "manage.html";

        let button = document.createElement("button")
        button.classList.add("managebutton")
        button.textContent = "Manage " + ownedcompany.name;
        button.dataset.company = ownedcompany.name;
        

        card.appendChild(name);
        card.appendChild(img);
        link.appendChild(button);
        card.appendChild(link)
        businesscontent.appendChild(card)

        button.addEventListener("click", () => {
            managecompany(ownedcompany);
        })
    })
}

function managecompany(company){
    localStorage.setItem("currentcompany", company.name);
    window.location.href = "manage.html";
}

function showcompany() {
    let companyname = localStorage.getItem("currentcompany");

    let company = ownedCompanies.find(c => c.name === companyname);

    let rubrik = document.querySelector(".rubrik");
    

    if (!company || !rubrik) return;

    activitiescard.innerHTML = "";

    rubrik.textContent = "Manage " + company.name;

    //create economycard elements
    let economytext = document.createElement("p")
    economytext.textContent = "Economy"
    economytext.classList.add("companyactivities")

    let economyinfo = document.createElement("div")

    let earned = document.createElement("div")
    earned.classList.add("earnedtext")

    let earnedtext = document.createElement("p")
    earnednumber = document.createElement("p")

    let value = document.createElement("div")
    value.classList.add("valuetext")

    let valuetext = document.createElement("p")
    let valuenumber = document.createElement("p")

    let linkEconomy = document.createElement("a")

    earnedtext.textContent = "Total Earned:"
    earnedtext.classList.add("text");
    earnednumber.textContent = company.earned + "€"
    earnednumber.classList.add("text")

    valuetext.textContent = "Total Value:"
    valuetext.classList.add("text")
    valuenumber.textContent = company.value + "€"
    valuenumber.classList.add("text")

    let HourincomeDiv = document.createElement("div")
    HourincomeDiv.classList.add("hourincome")

    let Hourincome = company.income / paytime * 3600000;
    Hourincome = Hourincome.toFixed(0)
    let incomePerHour = document.createElement("p")
    incomePerHour.textContent = "Income/Hour"
    incomePerHour.classList.add("text")

    incomePerHourNumber = document.createElement("p")
    incomePerHourNumber.textContent = Hourincome + "€"
    incomePerHourNumber.classList.add("text")

    linkEconomy.textContent = "←Go to economy tab"
    linkEconomy.href = "economy.html"

    economycard.appendChild(economytext)
    economycard.appendChild(economyinfo)
    economyinfo.appendChild(earned)
    economyinfo.appendChild(value)
    earned.appendChild(earnedtext)
    earned.appendChild(earnednumber)
    value.appendChild(valuetext)
    value.appendChild(valuenumber)
    HourincomeDiv.appendChild(incomePerHour)
    HourincomeDiv.appendChild(incomePerHourNumber)
    economyinfo.appendChild(HourincomeDiv)
    economycard.appendChild(linkEconomy)

    //create activitycard elements
    let activitytext = document.createElement("p");

    activitytext.textContent = "Activties"
    activitytext.classList.add("companyactivities")

    let activity = document.createElement("p");
    activity.classList.add("activity")
    activity.textContent = company.activity

    let beskrivning = document.createElement("p")
    beskrivning.textContent = company.beskrivning
    beskrivning.classList.add("text")

    let infodiv = document.createElement("div") 
    infodiv.classList.add("infodiv")

    let cost = document.createElement("p")
    cost.innerHTML = "Cost: " + activitycost + "€"
    cost.classList.add("infotext")

    let procentage = document.createElement("p")
    procentage.textContent = "+5%" 
    procentage.classList.add("infotext")

    activatebtn = document.createElement("button")
    activatebtn.textContent = "Activate"

    let note = document.createElement("p")
    note.textContent = "Note: You can not deactivate this once it's bought!"
    note.classList.add("note")

    if (company.active) {
        activatebtn.textContent = "Active";
        activatebtn.style.backgroundColor = "green";
    }

    activitiescard.appendChild(activitytext)
    activitiescard.appendChild(activity)
    activitiescard.appendChild(beskrivning)
    infodiv.appendChild(cost)
    infodiv.appendChild(procentage)
    activitiescard.appendChild(infodiv)
    activitiescard.appendChild(activatebtn)
    activitiescard.appendChild(note)

    activatebtn.addEventListener("click", () => {
        pushActivity(company);
    })
}

function updateEarned() {

    if(!earnednumber) return;
    if(!incomePerHourNumber) return;

    let companyname = localStorage.getItem("currentcompany");
    let companies = JSON.parse(localStorage.getItem("ownedCompanies")) || [];
    let company = companies.find(c => c.name === companyname);

    if (!company) return;

    earnednumber.textContent = company.earned + "€";
    incomePerHourNumber.textContent = Number(company.income / paytime * 3600000).toFixed(0) + "€";
}

function sortownedcompanies(){
    ownedCompanies.sort((a, b) => a.price - b.price);
}

function pushActivity(company) {

    if(!activatebtn) return;
    if(!company) return;

    if(activatebtn.textContent === "Active") return;

    if(user.money < activitycost){
        alert("You can't afford this yet!")
        return;
    }

    if(currentsettings.confirmPurchase){
        let answer = confirm("Do you want to upgrade for " + activitycost + "€")

        if(answer === false) return;
    }
    

    user.money = user.money - activitycost
    user.totexpenses += activitycost;
    activatebtn.textContent = "Active";
    activatebtn.style.backgroundColor = "green";

    company.income = company.income * activityprocentage;


    company.active = true;

    updateIncome();

    localStorage.setItem("money", JSON.stringify(user.money));
    localStorage.setItem("ownedCompanies", JSON.stringify(ownedCompanies));

    updateuser();
}

function displayuppgradesoverlay(uppgrade, text) {
    uppgradesoverlay.style.display = "flex"

    uppgardename.textContent = uppgrade
    uppgradeP.textContent = text
    let currentuppgrade = uppgrades.find(item => item.name === uppgrade)

    let buybtn = document.getElementById("uppgrade")
    buybtn.style.display = "flex"

    buybtn.onclick = () => {
        if(user.money < currentuppgrade.cost) {
            alert("You can not affor this yet!")
            uppgradesoverlay.style.display = "none"
            return;
        } else if(!activeuppgrades.includes(currentuppgrade.name)) {
            if(currentsettings.confirmPurchase){
                let answer = confirm("Do you wan't to buy " + uppgrade + " for " + currentuppgrade.cost + "€?")

                if(!answer) return;
            }
            user.money -= currentuppgrade.cost
            user.totexpenses += currentuppgrade.cost;

            uppgradesoverlay.style.display = "none"

            pushuppgrade(currentuppgrade);
            checkactive();
            updateuser();
            activateuppgrade(uppgrade);
            return;
        }
        else {
            alert("You already own this upgrade!")
        }
    }
}

function pushuppgrade(uppgrade) {
    uppgrade.active = true
    activeuppgrades.push(uppgrade.name)

    localStorage.setItem("activeuppgrades", JSON.stringify(activeuppgrades))
}

function checkactive() {

    uppgradebuttons.forEach(btn => {

        let currentuppgrade = uppgrades.find(item => item.name === btn.dataset.uppgrade);
        if(activeuppgrades.includes(btn.dataset.uppgrade)) {
            btn.classList.add("upactive")
            btn.textContent = "Active";
            btn.disabled = true;
        } else {
            btn.textContent = "Buy for " + currentuppgrade.cost + "€"
        }
    })
}

function displayuppgradeinfo(uppgrade){
    let buybtn = document.getElementById("uppgrade");
    uppgradesoverlay.style.display = "flex"
    uppgardename.textContent = uppgrade.name
    uppgradeP.textContent = uppgrade.btn.dataset.text
    buybtn.style.display = "none"
}

function activateuppgrade(uppgrade){

    if(uppgrade === "Income Rate"){
        allCompanies.forEach(company => {
            console.log(company.income)
            company.income *= 1.1
            company.income = Math.round(company.income)
            localStorage.setItem(company.name.toLowerCase() + "income", company.income)
            let ownedcompany = ownedCompanies.find(c => c.name === company.name);

            if(ownedcompany) {
                ownedcompany.income = company.income;
            }
            console.log(company + company.income)
        })

        localStorage.setItem("ownedCompanies", JSON.stringify(ownedCompanies));
        updateIncome();
    }

    else if(uppgrade === "Faster Payments") {
        console.log(paytime)
        paytime -= 15000
        paytime = paytime
        localStorage.setItem("paytime", paytime)
        console.log(paytime)
    }

    else if(uppgrade === "Faster Payments 2") {
        console.log(paytime)
        paytime -= 15000
        paytime = paytime
        localStorage.setItem("paytime", paytime)
        console.log(paytime)
    }

    else if(uppgrade === "Marketing Campaign") {
        allCompanies.forEach(company => {
            console.log(company.income)
            company.income *= 1.1
            company.income = Math.round(company.income)
            localStorage.setItem(company.name.toLowerCase() + "income", company.income)
            let ownedcompany = ownedCompanies.find(c => c.name === company.name);

            if(ownedcompany) {
                ownedcompany.income = company.income;
            }
            console.log(company.income)
        })

        localStorage.setItem("ownedCompanies", JSON.stringify(ownedCompanies));
        updateIncome();
    }

    else if(uppgrade === "Business Expansion"){
        allCompanies.forEach(company => {
            console.log(company.value)
            company.value *= 1.1
            company.value = Math.round(company.value)
            localStorage.setItem(company.name.toLowerCase() + "value", company.value)
            let ownedcompany = ownedCompanies.find(c => c.name === company.name);

            if(ownedcompany) {
                ownedcompany.value = company.value;
            }
            console.log(company.value)
        })

        localStorage.setItem("ownedCompanies", JSON.stringify(ownedCompanies));
        updateTotalValue();
    }

    else if(uppgrade === "Employee Motivation"){
        allCompanies.forEach(company => {
            console.log(company.income)
            company.income *= 1.15
            company.income = Math.round(company.income)
            localStorage.setItem(company.name.toLowerCase() + "income", company.income)
            let ownedcompany = ownedCompanies.find(c => c.name === company.name);

            if(ownedcompany) {
                ownedcompany.income = company.income;
            }
            console.log(company.income)
        })

        localStorage.setItem("ownedCompanies", JSON.stringify(ownedCompanies));
        updateIncome();
    } 
}

function updateEconomy() {

    if(!companiesOwnedText){
       return; 
    }

    let totalHourlyIncome = userincome / paytime * 3600000;

    const activeupg = ownedCompanies.filter((a) => a.active === true);

    companiesOwnedText.textContent = ownedCompanies.length + "/" + allCompanies.length;

    totalEarnedText.textContent = user.totearned + "€";

    totalValueText.textContent = user.totvalue + "€";

    totalHourlyIncomeText.textContent = Math.round(totalHourlyIncome) + "€";

    totalExpensesText.textContent = user.totexpenses + "€";

    activitiesActiveText.textContent = activeupg.length + "/" + ownedCompanies.length;

    uppgradesActiveText.textContent = activeuppgrades.length + "/" + uppgrades.length;
}

function updatesettings() {
    if(!confirmPurchase) return;

    confirmPurchase.checked = currentsettings.confirmPurchase
    colorTemplate.value = currentsettings.colorTemplate
    textcolor.value = currentsettings.textcolor
    backgroundcolor.value = currentsettings.backgroundcolor
    glow.value = currentsettings.glow
    boxes.value = currentsettings.boxes
    purchased.value = currentsettings.purchased
    headerAndSidebar.value = currentsettings.headerAndSidebar
    activesidebar.value = currentsettings.activesidebar
}

function updatetemplate(template){
    let currenttemplate = templates[template]
    currentsettings.colorTemplate = template;

    if(!currenttemplate) return;
    textcolor.value = currenttemplate.textcolor;
    backgroundcolor.value = currenttemplate.backgroundcolor;
    glow.value = currenttemplate.glow;
    boxes.value = currenttemplate.boxes;
    purchased.value = currenttemplate.purchased;
    headerAndSidebar.value = currenttemplate.headerAndSidebar;
    activesidebar.value = currenttemplate.activesidebar

    localStorage.setItem("textcolor", textcolor.value);
    localStorage.setItem("backgroundcolor", backgroundcolor.value);
    localStorage.setItem("glow", glow.value);
    localStorage.setItem("boxes", boxes.value);
    localStorage.setItem("purchased", purchased.value);
    localStorage.setItem("headerAndSidebar", headerAndSidebar.value);
    localStorage.setItem("activesidebar", activesidebar.value)

    currentsettings.textcolor = textcolor.value;
    currentsettings.backgroundcolor = backgroundcolor.value;
    currentsettings.glow = glow.value;
    currentsettings.boxes = boxes.value;
    currentsettings.purchased = purchased.value;
    currentsettings.headerAndSidebar = headerAndSidebar.value;
    currentsettings.activesidebar = activesidebar.value;

updatecolors();
savesettings();
}

function updatecolors(){
    document.documentElement.style.setProperty("--textcolor", currentsettings.textcolor);
    document.documentElement.style.setProperty("--backgroundcolor", currentsettings.backgroundcolor);
    document.documentElement.style.setProperty("--glow", currentsettings.glow)
    document.documentElement.style.setProperty("--boxes", currentsettings.boxes)
    document.documentElement.style.setProperty("--purchased", currentsettings.purchased)
    document.documentElement.style.setProperty("--headerAndSidebar", currentsettings.headerAndSidebar);
    document.documentElement.style.setProperty("--sidebaractive", currentsettings.activesidebar);
}

function resetSetting(){
    localStorage.setItem("autoconfirm", defaultsettings.confirmPurchase);
    localStorage.setItem("colorTemplate", defaultsettings.colorTemplate);
    localStorage.setItem("textcolor", defaultsettings.textcolor);
    localStorage.setItem("backgroundcolor", defaultsettings.backgroundcolor);
    localStorage.setItem("glow", defaultsettings.glow);
    localStorage.setItem("boxes", defaultsettings.boxes);
    localStorage.setItem("purchased", defaultsettings.purchased);
    localStorage.setItem("headerAndSidebar", defaultsettings.headerAndSidebar);
    localStorage.setItem("activesidebar", defaultsettings.activesidebar);

    Object.assign(currentsettings, defaultsettings)
    savesettings();
    updatesettings();
    updatecolors();
}

function savesettings() {
    localStorage.setItem("settings", JSON.stringify(currentsettings));
}

function resetprogress(){
    let rebootcounter = Number(localStorage.getItem("reboots")) || 0;
    let savedsettings = JSON.stringify(currentsettings);

    rebootcounter++;

    localStorage.clear();

    localStorage.setItem("reboots", rebootcounter);
    localStorage.setItem("settings", savedsettings);

    location.reload();
}

updatecolors();

updatesettings();

//EVENTLISTENERS

//buildbtn

if(buildbtn){
    buildbtn.addEventListener("click", () => {

        if(!currentcompany) return;

        if(user.money < currentcompany.cost){
            alert("You can't afford this yet!")
            overlay.style.display = "none"
            return;
        } 
        else if(BuildsInProgress.length >= 1){
            alert("You can't build more than one company at a time!")
            overlay.style.display = "none"
            return;
        } 
        
        if(currentsettings.confirmPurchase){
            let answer = confirm("vill du köpa " + currentcompany.name + " för " + currentcompany.cost + "?")

            if(answer === false){
            return;
        }
        }

        buycompany();
    });
}

// inspbtns

if (schoolinsp) {
    schoolinsp.addEventListener("click", () => {
        displayoverlay(school.name, school.img, school.buildtime, school.price, school.income, school.inspbutton, school.value);
    });
}

if (storeinsp) {
    storeinsp.addEventListener("click", () => {
        displayoverlay(store.name, store.img, store.buildtime, store.price, store.income, store.inspbutton, store.value);
    });
}

if (factoryinsp) {
    factoryinsp.addEventListener("click", () => {
        displayoverlay(factory.name, factory.img, factory.buildtime, factory.price, factory.income, factory.inspbutton, factory.value);
    });
}

if (bakeryinsp) {
    bakeryinsp.addEventListener("click", () => {
        displayoverlay(bakery.name, bakery.img, bakery.buildtime, bakery.price, bakery.income, bakery.inspbutton, bakery.value);
    });
}

if (warehouseinsp) {
    warehouseinsp.addEventListener("click", () => {
        displayoverlay(warehouse.name, warehouse.img, warehouse.buildtime, warehouse.price, warehouse.income, warehouse.inspbutton, warehouse.value);
    });
}

if (bankinsp) {
    bankinsp.addEventListener("click", () => {
        displayoverlay(bank.name, bank.img, bank.buildtime, bank.price, bank.income, bank.inspbutton, bank.value);
    });
}

// exitbtn

if (exitbtn) {
    exitbtn.addEventListener("click", () => {
        if(overlay){
            let buybtn = document.getElementById("uppgrade")
            if(buybtn){
                buybtn.style.display = "flex"
            }
            overlay.style.display = "none";
            currentcompany = null;
            return;
        } else if(uppgradesoverlay){
            uppgradesoverlay.style.display = "none"
            return;
        }
    });
}

//linkEventlisteners

sidebarlinks.forEach(link =>{
    link.addEventListener("click", () => {
        updateuser();
    })
})

if (document.querySelector(".rubrik")) {
    showcompany();
}

if(uppgradebuttons){
    uppgradebuttons.forEach(button => {

        button.addEventListener("click", () => {
            let uppgrade = button.dataset.uppgrade 
            let uppgradetext = button.dataset.text
            console.log(uppgrade)
            displayuppgradesoverlay(uppgrade, uppgradetext);
        })
    })
}

// uppgrade eventlisteners

if(uppgradebuttons){
    checkactive()
}

if(infobuttons) {
    infobuttons.forEach(btn => {
        btn.addEventListener("click", () => {
           let currentuppgrade = uppgrades.find(item => item.infobtn === btn)
           displayuppgradeinfo(currentuppgrade)
        })
    })
}

// settings eventlisteners

if(confirmPurchase) {
    confirmPurchase.addEventListener("change", () => {
        currentsettings.confirmPurchase = confirmPurchase.checked;

        localStorage.setItem("autoconfirm", confirmPurchase.checked);
        savesettings();
    });
}

if(colorTemplate) {
    colorTemplate.addEventListener("change", () =>{
        localStorage.setItem("colorTemplate", colorTemplate.value);
        updatetemplate(colorTemplate.value);
        savesettings();
        updatecolors();
    });
}

if(textcolor) {
    textcolor.addEventListener("input", () => {
        currentsettings.textcolor = textcolor.value
        localStorage.setItem("textcolor", textcolor.value);
        savesettings();
        updatecolors();
    });
}

if(backgroundcolor) {
    backgroundcolor.addEventListener("input", () => {
        currentsettings.backgroundcolor = backgroundcolor.value
        localStorage.setItem("backgroundcolor", backgroundcolor.value);
        savesettings();
        updatecolors();
    });
}

if(glow) {
    glow.addEventListener("input", () => {
        currentsettings.glow = glow.value
        localStorage.setItem("glow", glow.value);
        savesettings();
        updatecolors();
    });
}

if(boxes) {
    boxes.addEventListener("input", () => {
        currentsettings.boxes = boxes.value
        localStorage.setItem("boxes", boxes.value);
        savesettings();
        updatecolors();
    });
}

if(purchased) {
    purchased.addEventListener("input", () => {
        currentsettings.purchased = purchased.value
        localStorage.setItem("purchased", purchased.value);
        savesettings();
        updatecolors();
    });
}

if(headerAndSidebar) {
    headerAndSidebar.addEventListener("input", () => {
        currentsettings.headerAndSidebar = headerAndSidebar.value;
        localStorage.setItem("headerAndSidebar", headerAndSidebar.value);
        updatecolors();
        savesettings();
    });
}

if(activesidebar) {
    activesidebar.addEventListener("input", () => {
        currentsettings.activesidebar = activesidebar.value;
        localStorage.setItem("activesidebar", activesidebar.value);
        savesettings();
        updatecolors();
    });
}

if(resetSettingsbtn){
    resetSettingsbtn.addEventListener("click", () => {
        let answer = confirm("Do you wan't to reset all your settings? This action can not be undone!")
        if(answer){
            resetSetting();
        }
    })
}

if(resetProgressBtn){
    resetProgressBtn.addEventListener("click", () => {
        if(ownedCompanies.length !==6 || activeuppgrades.length !== 6){
            alert("You need to buy all companies and upgrades to be able to reset your progress!");
            return;
        }
        let answer = confirm("Do you want to delete ALL your progress? This action can not be undone!")
        if(answer) {
            resetprogress();
        }
    })
}

//other

updateCountdown();
updateEconomy();
setInterval(updateCountdown, 1000);
setInterval(updateEarned, 1000);
setInterval(updateEconomy, 1000);
setInterval(updatecolors, 1000)

