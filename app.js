const methods = {
    online: { label: "Online Transfer", channels: ["vaderpay","vaderpayc2","help2pay","payessence","bigpayz", "sklpay"] },
    qr: { label: "DuitNow QR", channels: ["vaderpayc1", "vaderpayc2", "eziepayqr"] },
    bank: { label: "Bank In Transfer", channels: ["banktransfer"] },
    wallet: {
        label: "E-Wallet",
        channels: [
            "vaderpayc1",
            "a9wallet",
            "payessence",
            "payjom",
            "bigpayz",
            "eziepay"
        ],
    },
    crypto: { label: "Crypto", channels: ["usdt"] },
};
const channels = {
    vaderpay: {
        name: "VADERPAY",
        mark: "VP",
        logo: "assets/vaderpay.png",
        type: "E-Wallet",
        time: "Instant",
        min: 30,
        max: 10000,
        featured: true,
        fee: "Free",
    },
    vaderpayc1: {
        name: "VADERPAY (C1)",
        mark: "VP",
        logo: "assets/vaderpay.png",
        type: "DuitNow QR",
        time: "Instant",
        min: 30,
        max: 10000,
        fee: "Free",
    },
    vaderpayc2: {
        name: "VADERPAY (C2)",
        mark: "VP",
        logo: "assets/vaderpay.png",
        type: "DuitNow QR",
        time: "Instant",
        min: 10,
        max: 10000,
        fee: "Free",
    },
    payessence: {
        name: "PAY ESSENCE",
        mark: "PE",
        logo: "assets/payEssence.svg",
        type: "Online Transfer",
        time: "Instant–5 mins",
        min: 10,
        max: 30000,
        featured: true,
        fee: "Free",
    },
    help2pay: {
        name: "HELP2Pay",
        mark: "H2",
        logo: "assets/helppay2.svg",
        type: "Online Transfer",
        time: "Under maintenance",
        min: 10,
        max: 10000,
        disabled: true,
        fee: "Free",
    },
    a9wallet: {
        name: "A9Wallet",
        mark: "A9",
        logo: "assets/a9-03.svg",
        type: "E-Wallet",
        time: "Instant",
        min: 20,
        max: 10000,
        featured: true,
        fee: "Free",
    },
    touchngo: {
        name: "Touch ’n Go",
        mark: "TNG",
        logo: "assets/touchngo.png",
        type: "E-Wallet",
        time: "Instant",
        min: 20,
        max: 10000,
        featured: true,
        fee: "Free",
    },
    payjom: {
        name: "PayJom",
        mark: "payjom",
        logo: "assets/payjom.svg",
        type: "E-Wallet",
        time: "Instant",
        min: 20,
        max: 15000,
        fee: "Free",
    },
    bigpayz: {
        name: "BigPayz",
        mark: "bigpayz",
        logo: "assets/bigpayz.svg",
        type: "E-Wallet",
        time: "1–5 mins",
        min: 20,
        max: 10000,
        fee: "Free",
    },
    eziepay: {
        name: "EeziePay",
        mark: "EZ",
        logo: "assets/eeziepay.svg",
        type: "E-Wallet",
        time: "Instant",
        min: 40,
        max: 500,
        fee: "Free",
    },
    eziepayqr: {
        name: "EeziePay",
        mark: "EZ",
        logo: "assets/eeziepay.svg",
        type: "DuitNow QR",
        time: "Instant",
        min: 40,
        max: 500,
        fee: "Free",
    },
    banktransfer: {
        name: "Local Bank Transfer",
        mark: "BT",
        type: "Bank Transfer",
        time: "Review in 5–15 mins",
        min: 20,
        max: 30000,
        fee: "Free",
    },
    usdt: {
        name: "VaderPay (C2)",
        mark: "VP",
        logo: "assets/vaderpay.png",
        type: "Crypto",
        time: "After on-chain confirmation",
        min: 5,
        max: 50000,
        fee: "Network fee",
    },
    sklpay: {
        name: "SKLPAY",
        mark: "SKL",
        logo: "",
        type: "Online Transfer",
        time: "",
        min: 50,
        max: 10000,
        featured: true,
        fee: "Free",
    },
    paymentA: { name: "PaymentA", mark: "A", type: "E-Wallet", time: "Instant", min: 40, max: 500, fee: "Free" },
    paymentB: { name: "PaymentB", mark: "B", type: "E-Wallet", time: "Instant", min: 40, max: 500, fee: "Free" },
    paymentC: { name: "PaymentA", mark: "A", type: "E-Wallet", time: "Instant", min: 40, max: 500, fee: "Free" },
    paymentD: { name: "PaymentB", mark: "B", type: "E-Wallet", time: "Instant", min: 40, max: 500, fee: "Free" },
    paymentE: { name: "PaymentA", mark: "A", type: "E-Wallet", time: "Instant", min: 40, max: 500, fee: "Free" },
    paymentF: { name: "PaymentB", mark: "B", type: "E-Wallet", time: "Instant", min: 40, max: 500, fee: "Free" },
};
const onlineBankOptions = [
    "Affin Bank",
    "AmBank",
    "Bank Simpanan Nasional",
    "Hong Leong Bank",
    "Maybank",
    "Public Bank Berhad",
    "RHB Bank",
    "CIMB Bank",
    "Bank Islam",
    "Bank Rakyat",
    "Alliance Bank",
    "OCBC Bank",
    "UOB Bank",
];
const depositPackages = [
    "Please Select",
    "No Bonus",
    "2% Unlimited Reload Bonus (Free Spin)",
    "Unlimited Casino Bonus 15% (MYR)",
    "10% Unlimited Slot Reload Bonus (MYR)",
    "10% Daily Deposit Bonus-Lottery Only",
];
const bankTransferOptions = [
    "Maybank",
    "Alliance"
];
const bankAccount = { name: "JH AUTO MOBILE", number: "560102718204" };
let ewalletChannelPage = 0;
const EWALLET_CHANNELS_PER_PAGE = 4;
let state = {
    method: "online",
    channel: "",
    channelSelected: false,
    extraChannel: "",
    filter: "all",
    amount: "",
    bank: "",
    package: "",
    cryptoNetwork: "",
    walletPayment: "",
};
const $ = (s) => document.querySelector(s);
function money(n) {
    return `MYR ${Number(n).toLocaleString("en-MY")}`;
}
function render(){
    renderTabs();
    renderChannels();
    renderSummary();
    renderForm();
}

function renderTabs() {
    const methodIcons = {
        online: "assets/icn-deposit-onlinetransfer.svg",
        qr: "assets/icn-deposit-QR.svg",
        bank: "assets/icn-deposit-bankin.svg",
        wallet: "assets/icn-deposit-eWallet.svg",
        crypto: "assets/icn-deposit-crypto.svg",
    };

    /* Remove old Deposit Method dropdown */
    const oldMethod = $("#depositMethodSelection");
    if (oldMethod) oldMethod.remove();

    /* Deposit Method dropdown */
    const methodSection = `
        <div id="depositMethodSelection" class="deposit-package-selection">
            <label class="form-label">
                Deposit Method <span class="required">*</span>
            </label>
            </div>
        </div>
    `;

    $("#categoryTabs").insertAdjacentHTML(
        "beforebegin",
        methodSection
    );

    /* Your existing 5 method cards */
    $("#categoryTabs").innerHTML = Object.entries(methods)
        .map(
            ([id, m]) =>
                `<button class="category-tab ${state.method === id ? "active" : ""}" onclick="setMethod('${id}')">
                    <img src="${methodIcons[id]}" class="category-tab-icon" alt="">
                    <span>${m.label}</span>
                </button>`
        )
        .join("");
}

function renderChannels() {
    document
        .querySelectorAll(
            "#onlineBankSelection,.bank-selection,.accepts-payment,#cryptoNetworkSelection,#depositPackageSelection"
        )
        .forEach((el) => el.remove());
    const bankAreaReset = $("#bankArea");
    if (bankAreaReset) bankAreaReset.innerHTML = "";
    const packageSection=`
<div id="depositPackageSelection" class="deposit-bonus-selection">

    <div class="deposit-bonus-title">
        Select a Package <span class="required">*</span>
    </div>

    <div class="deposit-bonus-list">

        ${depositPackages
            .filter(p=>p!=="Please Select")
            .map((p,index)=>{

                const selected=state.package===p;

                let title=p;
                let subtitle="";

                if(p==="No Bonus"){
                    title="No Bonus";
                }
                return `
                <button
                    type="button"
                    class="deposit-bonus-card ${selected?"selected":""}"
                    onclick="chooseDepositPackage('${p}')"
                >
                    <span class="deposit-bonus-radio"></span>

                    <span class="deposit-bonus-content">

                        <span class="deposit-bonus-name">
                            ${title}
                        </span>

                        ${
                            subtitle
                            ?`<span class="deposit-bonus-subtitle">
                                ${subtitle}
                            </span>`
                            :""
                }
                    </span>
                </button>
                `;
            }).join("")}
    </div>
</div>`;
       
    const packageArea = $("#packageArea");
    if (packageArea) packageArea.innerHTML = packageSection;
    if(state.method==="bank"){
        $("#channelTitle").textContent="Choose a receiving bank";
        $("#channelSubtitle").textContent="";
        $("#filterBtn").classList.add("hidden");
        $("#filterRow").classList.add("hidden");

        const bankArea = $("#bankArea");
        if (bankArea) bankArea.innerHTML = `

        ${state.bank?bankAccountDetails():""}
    `;

        $("#channelGrid").innerHTML = "";
        return;
    }
    $("#channelTitle").innerHTML = `Payment channel <span class="required">*</span>`;
    $("#filterBtn").classList.add("hidden");
    $("#filterRow").classList.add("hidden");
    const list = methods[state.method].channels.filter((id) => {
        let c = channels[id];

        return (
            state.filter === "all" ||
            (state.filter === "low" && c.min <= 20) ||
            (state.filter === "high" && c.max >= 10000)
        );
    });
    /* Same 3-column Payment Channel design for Online Transfer, DuitNow QR,
       E-Wallet and Crypto. Bank In Transfer returned above. */
    $("#channelGrid").classList.remove("ewallet-paged");

    const paymentChannelSection = `
<div id="paymentChannelSelection" class="payment-channel-selection">
    <div class="payment-channel-text-list">
        ${list.map(id => {
            const c = channels[id];
            return `
            <button
                type="button"   
                    class="payment-channel-text-item
                        ${state.channel === id ? "selected" : ""}
                        ${c.disabled ? "disabled maintenance" : ""}"
                        ${c.disabled ? "" : `onclick="choosePaymentChannel('${id}')"`}>
                ${c.name}
                ${c.disabled ? `
                    <img
                        src="assets/maintenance.svg"
                        class="maintenance-icon"
                        alt="Under Maintenance"
                    >
                <div class="maintenance-overlay"></div>
                    ` : ""}
            </button>
            `;
        }).join("")}
    </div>
</div>
`;
    const extraChannelSection = state.channel === "vaderpayc2" ? `
        <div id="vaderpayC2ExtraSelection" class="extra-channel-selection">
            <div class="extra-channel-title">
                Choose Channel <span class="required">*</span>
            </div>
            <div class="extra-channel-grid">
                ${["Channel 1", "Channel 2", "Channel 3"].map(channel => `
                    <button
                        type="button"
                        class="extra-channel-item ${state.extraChannel === channel ? "selected" : ""}"
                        onclick="chooseExtraChannel('${channel}')"
                    >
                        ${channel}
                    </button>
                `).join("")}
            </div>
        </div>
    ` : "";

    $("#channelGrid").innerHTML = paymentChannelSection + extraChannelSection;

    if (state.method === "crypto") {

        const cryptoNetworks = [
            {
                id: "TRC20-USDT",
                name: "TRC20-USDT",
                icon: "assets/tether.svg"
            },
            {
                id: "ERC20-USDT",
                name: "ERC20-USDT",
                icon: "assets/ethereum.svg"
            }
        ];

        const networkSection = `
        <div id="cryptoNetworkSelection" class="crypto-network-selection">

            <div class="crypto-network-title">
                Choose a crypto network
            </div>

            <div class="crypto-network-grid">

                ${cryptoNetworks.map(network => `
                    <button
                        type="button"
                        class="crypto-network-item ${
                            state.cryptoNetwork === network.id
                                ? "selected"
                                : ""
                }"
                        onclick="setCryptoNetwork('${network.id}')"
                    >

                        <img
                            src="${network.icon}"
                            alt="${network.name}"
                        >

                        <span>
                            ${network.name}
                        </span>

                    </button>
                `).join("")}

            </div>

        </div>
    `;

        const bankArea = $("#bankArea");
        if (bankArea) bankArea.innerHTML = networkSection;

        return;
    }
    if (
   (state.method === "online" && (state.channel === "vaderpay" || state.channel === "vaderpayc2" || state.channel === "bigpayz" || state.channel === "sklpay"))
) {
            const bankSection = `
                    <div id="onlineBankSelection" class="bank-selection">

                    <label class="form-label">
                        Choose a Bank <span class="required">*</span>
            </label>

        <div class="bank-grid">

            ${onlineBankOptions.map(bank => `

                <button
                    type="button"
                    class="bank-grid-item ${state.bank === bank ? "selected" : ""}"
                    onclick='chooseOnlineBank(${JSON.stringify(bank)})'
                >

                    <img
                        src="${getBankIcon(bank)}"
                        alt="${bank}"
                    >
                    <span>${bank}</span>
                </button>
            `).join("")}
        </div>
    </div>
    `;

            const bankArea = $("#bankArea");
            if (bankArea) bankArea.innerHTML = bankSection;
        }
        if (
        (state.method === "online" && (state.channel === "payessence")) ||
        (state.method === "qr" && (state.channel === "vaderpayc1" || state.channel === "vaderpayc2")) ||
        (state.method === "wallet" && (state.channel === "vaderpayc1" || state.channel === "vaderpayc2" || state.channel === "eziepay"))
    ) {
        const paymentSources = [
            ["duitNow", "DuitNow", "duitNow"],
            ["boost", "Boost", "boost"],
            ["grabpay", "GrabPay", "grabpay"],
            ["shopee", "ShopeePay", "shopee"],
            ["touchNgo", "Touch ’n Go", "touchNgo"],
        ];
        const acceptsSection = `<div class="accepts-payment"><div class="accepts-payment-title">Accepts Payment From</div><div class="accepts-payment-icons">${paymentSources.map(([asset, name, key]) => `<button type="button"class="accepts-payment-item payment-source-option ${state.walletPayment === key ? "selected" : ""}"onclick="chooseWalletPayment('${key}')"><img src="assets/${asset}.svg"alt="${name}"></button>`).join("")}</div></div>`;
        // Show Accepts Payment From above the Amount section on the right.
        // This applies to Pay Essence, DuitNow QR and E-Wallet flows.
        if (
            state.method === "online" ||
            state.method === "qr" ||
            state.method === "wallet"
        ) {
            const dynamicForm = $("#dynamicForm");

            if (dynamicForm) {
                dynamicForm.insertAdjacentHTML(
                    "beforebegin",
                    acceptsSection
                );
            }
        }
    }
}
function getWalletPaymentIcon(key) {
    const icons = {
        duitNow: "assets/duitNow.svg",
        boost: "assets/boost.svg",
        grabpay: "assets/grabpay.svg",
        shopee: "assets/shopee.svg",
        touchNgo: "assets/touchNgo.svg",
    };
    return icons[key] || "";
}
function getWalletPaymentName(key) {
    const names = {
        duitNow: "DuitNow",
        boost: "Boost",
        grabpay: "GrabPay",
        shopee: "ShopeePay",
        touchNgo: "Touch ’n Go",
    };
    return names[key] || "";
}
function getBankIcon(bank) {
    const icons = {
        "Affin Bank": "assets/bank-afffin.svg",
        AmBank: "assets/bank-am.svg",
        "Bank Simpanan Nasional": "assets/bank-bsn.svg",
        "Hong Leong Bank": "assets/bank-HLB.svg",
        Maybank: "assets/bank-maybank.svg",
        "Public Bank Berhad": "assets/bank-Pb.svg",
        "RHB Bank": "assets/bank-RHB.svg",
        "CIMB Bank": "assets/bank-am.svg",
        "Bank Islam": "assets/bank-islam.svg",
        "Bank Rakyat": "assets/bank-rakyat.svg",
        "Alliance Bank": "assets/bank-alliance.svg",
        "OCBC Bank": "assets/bank-ocbc.svg",
        "UOB Bank": "assets/bank-uob.svg",
    };
    return icons[bank] || "";
}
function togglePaymentChannelDropdown() {
    const dropdown = $("#paymentChannelDropdown");
    if (dropdown) dropdown.classList.toggle("show");
}
function choosePaymentChannel(id){
    if(!channels[id]||channels[id].disabled)return;
    state.channel=id;
    state.channelSelected=true;
    state.extraChannel = id === "vaderpayc2" ? state.extraChannel : "";
    state.amount="";
    if(state.method==="online")state.bank="";
    if(state.method==="wallet"||state.method==="qr")state.walletPayment="";
    const dropdown=$("#paymentChannelDropdown");
    if(dropdown)dropdown.classList.remove("show");
    renderChannels();
    renderForm();
    renderSummary();
}
function chooseExtraChannel(channel) {
    state.extraChannel = channel;
    renderChannels();
    renderSummary();
    renderForm();
    validate();
}

function toggleBankDropdown() {
    const dropdown = $("#bankDropdown");
    if (dropdown) dropdown.classList.toggle("show");
}
function toggleDepositPackageDropdown() {
    const dropdown = $("#depositPackageDropdown");
    if (dropdown) dropdown.classList.toggle("show");
}
function chooseDepositPackage(packageName){

    state.package=packageName;

    renderChannels();
    renderSummary();
    renderForm();

}
function chooseWalletPayment(key) {
    state.walletPayment = key;
    renderChannels();
    renderSummary();
    renderForm();
}
function chooseBank(bank){
    if(state.method!=="bank")return;
    state.bank=bank;
    state.channel="banktransfer";
    state.amount="";
    const dropdown=$("#receivingBankDropdown");
    if(dropdown)dropdown.classList.remove("show");
    renderChannels();
    renderSummary();
    renderForm();
}
let ewalletDragStartX = null;
let ewalletDragStartY = null;
let ewalletDragging = false;
function goEwalletChannelPage(page) {
    ewalletChannelPage = page;
    renderChannels();
}
function bindEwalletDrag() {
    const grid = $("#channelGrid");
    if (!grid || grid.dataset.dragBound === "1") return;
    grid.dataset.dragBound = "1";
    grid.addEventListener("pointerdown", (e) => {
        if (state.method !== "wallet") return;
        ewalletDragStartX = e.clientX;
        ewalletDragStartY = e.clientY;
        ewalletDragging = true;
        grid.setPointerCapture?.(e.pointerId);
    });
    grid.addEventListener("pointerup", (e) => {
        if (!ewalletDragging || ewalletDragStartX === null) return;
        const dx = e.clientX - ewalletDragStartX;
        const dy = e.clientY - ewalletDragStartY;
        ewalletDragging = false;
        ewalletDragStartX = null;
        ewalletDragStartY = null;
        if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.15) return;
        const list = methods.wallet.channels.filter((id) => {
            const c = channels[id];
            return (
                !c.disabled &&
                (state.filter === "all" ||
                    (state.filter === "low" && c.min <= 20) ||
                    (state.filter === "high" && c.max >= 10000))
            );
        });
        const totalPages = Math.max(1, Math.ceil(list.length / EWALLET_CHANNELS_PER_PAGE));
        const nextPage = dx < 0 ? ewalletChannelPage + 1 : ewalletChannelPage - 1;
        if (nextPage >= 0 && nextPage < totalPages) goEwalletChannelPage(nextPage);
    });
    grid.addEventListener("pointercancel", () => {
        ewalletDragging = false;
        ewalletDragStartX = null;
        ewalletDragStartY = null;
    });
}
function chooseOnlineBank(bank) {
    state.bank = bank;
    renderChannels();
    renderSummary();
    renderForm();
    validate();
}
function bankAccountDetails() {
    return `<div class="bank-card"><h3>Receiving account for this order</h3><div class="account-line"><span>Receiving bank</span><b>${state.bank || "Please select a bank"}</b></div>${[
        ["Bank account name", bankAccount.name],
        ["Bank account number", bankAccount.number],
    ]
        .map(
            (x) =>
                `<div class="fixed-account-field"><span>${x[0]}</span><div><b>${x[1]}</b><button class="copy-icon"title="Copy ${x[0]}"aria-label="Copy ${x[0]}"onclick="copyText('${x[1]}')"><img src="assets/copy-icon.svg"alt=""></button></div></div>`
        )
        .join("")}</div>`;
}
function setCryptoNetwork(network) {
    state.cryptoNetwork = network;
    renderChannels();
    renderSummary();
    renderForm();
}
function renderSummary() {
    if (state.method === "bank") {

        $("#channelTitle").innerHTML =
       `Choose a receiving bank <span class="required">*</span>`;

        $("#filterBtn").classList.add("hidden");
        $("#filterRow").classList.add("hidden");

        $("#channelGrid").innerHTML = `
        <div class="bank-selector">
            <div class="bank-option-tabs">

                ${bankTransferOptions.map(bank => `
                    <button
                        type="button"
                        class="bank-tile ${
                            state.bank === bank
                                ? "selected"
                                : ""
                }"
                        onclick="chooseBank('${bank}')"
                    >

                        <img
                            src="assets/${
                                bank === "Maybank"
                                    ? "maybank"
                                    : "alliance"
                }.svg"
                            alt="${bank}"
                        >

                        <span>${bank.toUpperCase()}</span>

                    </button>
                `).join("")}

            </div>

            <p class="bank-helper">
                Select the bank you will use for this transfer.
            </p>
        </div>
    `;

        return;
    }
    let c = channels[state.channel],
        logo = c.logo ? `<img src="${c.logo}" alt="${c.name}logo">` : c.mark;
    $("#providerSummary").classList.add("hidden");
    let methodLine = "";
    if (state.method === "online" && state.bank)
        methodLine = `<p class="provider-method"><img src="${getBankIcon(state.bank)}" alt="${state.bank}" class="summary-bank-icon"><span>${state.bank}</span></p>`;
    else if (
        (state.method === "wallet" || state.method === "qr") &&
        (state.channel === "vaderpayc1" || state.channel === "vaderpayc2" || state.channel === "eziepay")
    )
        methodLine = `<p class="provider-method"><img src="${getWalletPaymentIcon(state.walletPayment)}" alt="${getWalletPaymentName(state.walletPayment)}" class="duitnow-summary-icon"><span>${getWalletPaymentName(state.walletPayment)}</span></p>`;
    else if (state.method === "crypto" && state.cryptoNetwork)
        methodLine = `<p class="provider-method"><img src="assets/${state.cryptoNetwork === "TRC20-USDT" ? "tether.svg" : "ethereum.svg"}" alt="${state.cryptoNetwork}" class="crypto-summary-icon"><span>${state.cryptoNetwork}</span></p>`;
    else if (state.channel === "vaderpayc1" || state.channel === "vaderpayc2")
        methodLine = `<p class="provider-method"><img src="assets/duitNow.svg" alt="DuitNow" class="duitnow-summary-icon"><span>DuitNow QR · Instant</span></p>`;
    $("#providerSummary").innerHTML =
        `<div class="large-logo ${c.logo ? "image-logo" : ""}">${logo}</div><div><h2>${c.name}</h2>${methodLine}</div>`;
}
function field(label, content) {
    return `<label class="form-label">${label}</label>${content}`;
}
function amountBlock(c) {
    return `${field(`Amount <span class="required">*</span>`, `<div class="amount-wrap"><span class="currency">MYR</span><input id="amount"inputmode="decimal"placeholder="0"value="${state.amount}"oninput="setAmount(this.value)"></div><div id="amountHelp"class="input-help">Per transaction:${money(c.min)}–${money(c.max)}</div>`)}<div class="quick-amounts">${[20, 50, 100, 200, 500, 1000].map((v) => `<button onclick="quickAmount(${v})">MYR ${v}</button>`).join("")}</div>`;
}
function renderForm() {
    let c = channels[state.channel],
        specific = "";
    if (state.channel === "banktransfer")
        specific = `${amountBlock(c)}<div class="form-row"><div>${field('Transfer Type <span class="required">*</span>', `<select class="form-control"><option>Internet Banking</option><option>ATM</option><option>CDM</option><option>SMS Banking</option></select>`)}</div><div>${field("Sender account name", `<input class="form-control"placeholder="Enter sender account name">`)}</div></div>${field("Transfer receipt (optional)", `<div class="upload-box">A receipt may help us process your request faster.<br>JPG,PNG,or PDF·maximum 10MB<br><label>Select file<input type="file"onchange="showToast('Transfer receipt selected')"></label></div>`)}<div class="notice" style="margin-top:18px"><b>!</b><span>Please pay only to the account shown on this order. Do not transfer to previous or other accounts.</span></div>`;
   
    else {
        let warning =
            state.channel === "eziepay"
                ? `<div class="notice"><b>!</b><span>This channel has a ${money(500)} maximum per transaction. Choose another channel for a higher amount.</span></div>`
                : "";
        specific = `${warning}${amountBlock(c)}`;
    }
    const label =
        state.channel === "banktransfer"
            ? "Submit transfer request"
            : state.channel === "usdt"
              ? "Continue"
              : state.method === "qr"
                ? "Generate payment QR code"
                : `Continue with ${c.name}`;
    $("#dynamicForm").innerHTML =
        `${specific}<button id="submitBtn" class="primary-button" onclick="submitDeposit()">${label}</button><div class="security-copy"><img src="assets/secure.svg" alt="Security"><span>Your payment details are encrypted. Never share your order details with anyone.</span></div>`;
    validate();
}
const securityCopyStyle = document.createElement("style");
securityCopyStyle.textContent =
    ".security-copy{display:flex;align-items:center;gap:8px}.security-copy img{width:16px;height:16px;object-fit:contain;flex-shrink:0}";
document.head.appendChild(securityCopyStyle);
const depositPackageStyle = document.createElement("style");
depositPackageStyle.textContent = `.deposit-package-selection{}.deposit-package-wrap{position:relative;width:100%}.deposit-package-select{width:100%;height:44px;padding:0 14px;border:1px solid #b9d0ff;border-radius:6px;background:#fff;color:#10243f;display:flex;align-items:center;justify-content:space-between;font-size:16px;cursor:pointer;text-align:left;box-sizing:border-box}.package-placeholder{color:#777}.package-arrow{color:#627795;font-size:14px}.deposit-package-dropdown{position:absolute;top:calc(100% + 4px);bottom:auto;left:0;right:0;background:#fff;border:1px solid #d9e2ee;border-radius:6px;box-shadow:0 8px 24px rgba(20,50,90,.15);max-height:240px;overflow-y:auto;z-index:9999;display:none}.deposit-package-dropdown.show{display:block}.deposit-package-item{width:100%;min-height:44px;padding:10px 14px;border:0;background:#fff;color:#10243f;text-align:left;font-size:15px;cursor:pointer}.deposit-package-item:hover{background:#f1f6ff}`;
document.head.appendChild(depositPackageStyle);
function setMethod(id) {
    state.method = id;
    state.filter = "all";
    if (id === "wallet") ewalletChannelPage = 0;
    if (id === "crypto") state.cryptoNetwork = "";
    let first = methods[id].channels.find((x) => !channels[x].disabled);
    state.channel = "";
    state.amount = "";
    if (id !== "online") state.bank = "";
    state.walletPayment = "";
    state.package = "";
    state.channelSelected = false;
    state.extraChannel = "";
    render();
}
function selectChannel(id) {
    if (channels[id].disabled) {
        showToast("This channel is under maintenance. Please choose another method.");
        return;
    }
    state.channel = id;
    state.amount = "";
    if (state.method === "online") state.bank = "";
    if (state.method === "wallet" || state.method === "qr") state.walletPayment = "";
    render();
}
function setFilter(v) {
    state.filter = v;
    renderChannels();
}
function setAmount(v) {
    state.amount = v;
    validate();
    if (state.channel === "usdt")
        $("#usdtEstimate").textContent = `~ ${(Number(v || 0) * 0.2477).toFixed(4)} ${state.cryptoNetwork}`;
}
function quickAmount(v) {
    state.amount = v;
    let a = $("#amount");
    if (a) a.value = v;
    validate();
    if (state.channel === "usdt")
        $("#usdtEstimate").textContent = `~ ${(v * 0.2477).toFixed(4)} ${state.cryptoNetwork}`;
}
function validateDepositRequirements() {
    const errors = [];
    const amount = Number(state.amount);

    // All flows require a package.
    if (!state.package || state.package === "Please Select") {
        errors.push("Please select a package.");
    }

    // Online Transfer: Package + Payment Channel + Choose Bank + Amount
    if (state.method === "online") {
        if (!state.channelSelected || !state.channel) errors.push("Please select a payment channel.");
        if (!state.bank) errors.push("Please choose a bank.");
    }

    // DuitNow QR: Package + Payment Channel + Amount
    if (state.method === "qr") {
        if (!state.channelSelected || !state.channel) errors.push("Please select a payment channel.");
    }

    // Bank In Transfer: Package + Receiving Bank + Amount
    if (state.method === "bank") {
        if (!state.bank) errors.push("Please choose a receiving bank.");
    }

    // E-Wallet: Package + Payment Channel + Accepts Payment From + Amount
    if (state.method === "wallet") {
        if (!state.channelSelected || !state.channel) errors.push("Please select a payment channel.");
        if (!state.walletPayment) errors.push("Please select Accepts Payment From.");
    }

    // Crypto: Package + Payment Channel + Crypto Network + Amount
    if (state.method === "crypto") {
        if (!state.channelSelected || !state.channel) errors.push("Please select a payment channel.");
        if (!state.cryptoNetwork) errors.push("Please choose a crypto network.");
    }

    if (!amount || amount <= 0) {
        errors.push("Please enter a deposit amount.");
    } else if (state.channel && channels[state.channel]) {
        const c = channels[state.channel];
        if (amount < c.min || amount > c.max) {
            errors.push(`Amount must be between ${money(c.min)} and ${money(c.max)}.`);
        }
    }

    return errors;
}

function validate() {
    const btn = $("#submitBtn");
    if (!btn) return;
    const errors = validateDepositRequirements();
    btn.disabled = errors.length > 0;
    btn.setAttribute("aria-disabled", errors.length > 0 ? "true" : "false");
}

function depositReminderStyles() {
    if ($("#depositReminderStyle")) return;
    const s = document.createElement("style");
    s.id = "depositReminderStyle";
    s.textContent = `#depositReminderBackdrop{position:fixed;inset:0;background:rgba(9,24,44,.48);display:flex;align-items:center;justify-content:center;z-index:99999;padding:20px;box-sizing:border-box}#depositReminderBox{width:min(440px,100%);background:#fff;border-radius:16px;box-shadow:0 20px 60px rgba(10,30,60,.22);padding:26px;box-sizing:border-box;font-family:inherit;color:#10243f}#depositReminderBox .dr-icon{width:42px;height:42px;border-radius:50%;background:#fff3d6;color:#b77900;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;margin-bottom:14px}#depositReminderBox h3{margin:0 0 8px;font-size:20px;color:#10243f}#depositReminderBox p{margin:0 0 18px;color:#627795;line-height:1.55;font-size:14px}#depositReminderBox .dr-selection{background:#f4f7fb;border:1px solid #e0e7f0;border-radius:10px;padding:10px 14px;margin-bottom:20px;font-weight:600;color:#10243f;display:flex;align-items:center;gap:10px;min-height:44px;box-sizing:border-box}#depositReminderBox .dr-payment-icon{width:30px;height:30px;object-fit:contain;flex:0 0 30px}#depositReminderBox .dr-actions{display:flex;gap:10px;justify-content:flex-end}#depositReminderBox button{min-height:44px;padding:0 18px;border-radius:9px;border:0;font-weight:700;cursor:pointer;font-size:14px}#depositReminderBox .dr-back{background:#eef2f7;color:#34506f}#depositReminderBox .dr-continue{background:#2879e8;color:#fff}`;
    document.head.appendChild(s);
}
function showDepositReminder(title, message, selection, onContinue, actionLabel) {
    actionLabel = actionLabel || "Continue";
    depositReminderStyles();
    let old = $("#depositReminderBackdrop");
    if (old) old.remove();
    const el = document.createElement("div");
    el.id = "depositReminderBackdrop";
    el.innerHTML = `<div id="depositReminderBox" role="dialog" aria-modal="true" aria-labelledby="depositReminderTitle"><div class="dr-icon">!</div><h3 id="depositReminderTitle">${title}</h3><p>${message}</p>${selection ? `<div class="dr-selection">${selection === "DuitNow" ? `<img src="assets/duitNow.svg" alt="DuitNow" class="dr-payment-icon">` : selection === "Boost" ? `<img src="assets/boost.svg" alt="Boost" class="dr-payment-icon">` : selection === "GrabPay" ? `<img src="assets/grabpay.svg" alt="GrabPay" class="dr-payment-icon">` : selection === "ShopeePay" ? `<img src="assets/shopee.svg" alt="ShopeePay" class="dr-payment-icon">` : selection === "Touch ’n Go" ? `<img src="assets/touchNgo.svg" alt="Touch ’n Go" class="dr-payment-icon">` : selection === "TRC20-USDT" ? `<img src="assets/tether.svg" alt="TRC20-USDT" class="dr-payment-icon">` : selection === "ERC20-USDT" ? `<img src="assets/ethereum.svg" alt="ERC20-USDT" class="dr-payment-icon">` : ""}<span>${selection}</span></div>` : ""}<div class="dr-actions">${actionLabel === "Choose Bank" ? `<button type="button"class="dr-continue"style="width:100%"onclick="closeDepositReminder();toggleBankDropdown()">Choose Bank</button>` : `<button type="button"class="dr-back"onclick="closeDepositReminder()">Back</button><button type="button"class="dr-continue"onclick="closeDepositReminder();${onContinue}">${actionLabel}</button></>`}</div></div>`;
    document.body.appendChild(el);
    el.onclick = (e) => {
        if (e.target === el) closeDepositReminder();
    };
}
function closeDepositReminder() {
    let el = $("#depositReminderBackdrop");
    if (el) el.remove();
}
function processDeposit() {
    let btn = $("#submitBtn");
    if (!btn) return;
    btn.disabled = true;
    btn.textContent = "Creating secure payment order…";
    setTimeout(() => {
        btn.disabled = false;
        openModal();
    }, 700);
}
function submitDeposit() {
    let btn = $("#submitBtn");
    const errors = validateDepositRequirements();
    if (errors.length) {
        showToast(errors[0]);
        validate();
        return;
    }
    if (!btn || btn.disabled) return;
    if (state.method === "bank" && !state.bank) {
        showDepositReminder(
            "Choose a receiving bank",
            "Please select a receiving bank before continuing.",
            "Choose Maybank or Alliance Bank for this transfer.",
            "",
            "Choose Bank"
        );
        return;
    }
    if (state.method === "online" && !state.bank) {
        showDepositReminder(
            "Choose a bank",
            "Please select a bank before continuing.",
            "Choose a bank to receive the payment instruction.",
            "",
            "Choose Bank"
        );
        return;
    }
    if (state.method === "online") {
        const bank = String(state.bank || "").trim();
        const amount = String(state.amount || "").trim();
        if (!bank || !amount) return;
        sessionStorage.setItem("bankTransferFlow", JSON.stringify({ bank, amount }));
        window.location.assign(
            "Bank_transfer.html?state=1&bank=" + encodeURIComponent(bank) + "&amount=" + encodeURIComponent(amount)
        );
        return;
    }
    if (
        (state.method === "qr" || state.method === "wallet") &&
        (state.channel === "vaderpayc1" || state.channel === "vaderpayc2" || state.channel === "eziepay")
    ) {
        const name = getWalletPaymentName(state.walletPayment);
        showDepositReminder(
            "Check your payment method",
            "Please make sure you have selected your preferred payment method before continuing.",
            name,
            "window.location.href='DuitNowQR.html?amount=' + encodeURIComponent(state.amount)",
            "Continue to QR Payment"
        );
        return;
    }
    if (state.method === "crypto") {
        if (!state.cryptoNetwork) {
            showDepositReminder(
                "Choose a crypto network",
                "Please select TRC20-USDT or ERC20-USDT before continuing.",
                "Choose a crypto network",
                "",
                "Choose Network"
            );
            return;
        }
        showDepositReminder(
            "Check your crypto network",
            "Please confirm that the selected crypto network matches the network you will use to make the deposit.",
            state.cryptoNetwork,
            ""
        );
        return;
    }
    if (state.channel === "banktransfer") {
        showDepositReminder(
            "Check your transfer details",
            "Please review your bank transfer details and make sure you are paying to the correct account.",
            "Bank transfer details",
            ""
        );
        return;
    }
    processDeposit();
}
function openModal() {
    let c = channels[state.channel],
        isCrypto = state.channel === "usdt",
        isBank = state.channel === "banktransfer";
    let body = isBank
        ? `<h2>Transfer request submitted</h2><p>Please keep the order number. Your balance will update automatically when the review is complete.</p><div class="payment-detail"><span>Order number</span><b>DEP20260820-9821</b></div><div class="payment-detail"><span>Status</span><b class="countdown">Under review</b></div><div class="payment-detail"><span>Estimated processing time</span><b>5–15 minutes</b></div>`
        : isCrypto
          ? `<h2>USDT deposit address</h2><p>Send USDT to this address using the specified network.</p><div class="qr"></div><div class="payment-detail"><span>Network</span><b>${state.cryptoNetwork}</b></div><div class="payment-detail"><span>Wallet address</span><b>0x9F6a...81cD <button class="copy-button" onclick="copyText('0x9F6a3C8d1f88A3c4B7dE7A6f1F10b39881cD')">Copy</button></b></div><div class="network">Do not send assets other than USDT on the selected ${state.cryptoNetwork} network to this address. They may not be recoverable.</div>`
          : `<h2>Payment QR code generated</h2><p>Scan this QR code with a supported wallet to complete payment.</p><div class="qr"></div><div class="payment-detail"><span>Amount due</span><b>${money(state.amount)}</b></div><div class="payment-detail"><span>Order status</span><b class="countdown">Waiting for payment · 14:58</b></div><div class="payment-detail"><span>Order number</span><b>DEP20260820-9821</b></div>`;
    $("#modal").innerHTML =
        `${body}<div class="modal-actions"><button class="secondary-button" onclick="closeModal()">${isCrypto ? "Edit amount" : "Close"}</button><button class="primary-button" onclick="closeModal();showToast('${isBank ? "Request received. We will process it shortly." : "Checking payment status"}')">${isBank ? "Done" : "I have paid"}</button></div>`;
    $("#modalBackdrop").classList.remove("hidden");
}
function closeModal() {
    $("#modalBackdrop").classList.add("hidden");
}
function copyText(t) {
    navigator.clipboard?.writeText(t);
    showToast("Account details copied");
}
function showToast(t) {
    let el = $("#toast");
    el.textContent = t;
    el.classList.add("show");
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
}
const cryptoSummaryStyle = document.createElement("style");
cryptoSummaryStyle.textContent =
    ".crypto-summary-icon{width:24px;height:24px;object-fit:contain;vertical-align:middle;margin-right:8px}";
document.head.appendChild(cryptoSummaryStyle);
$("#modalBackdrop").onclick = (e) => {
    if (e.target.id === "modalBackdrop") closeModal();
};
function initDepositHelp() {
    if (document.getElementById("depositHelp")) return;
    const headings = [...document.querySelectorAll("h1,h2,h3")].filter((el) => el.textContent.trim() === "Deposit");
    const title = headings[0];
    if (!title) return;
    const wrap = document.createElement("span");
    wrap.className = "deposit-title-with-help";
    const icon = document.createElement("span");
    icon.id = "depositHelp";
    icon.className = "deposit-help";
    icon.setAttribute("aria-label", "Need for Help?");
    icon.innerHTML = `<img src="assets/help.svg" alt="Help"><span>Need for Help?</span>`;
    title.parentNode.insertBefore(wrap, title);
    wrap.appendChild(title);
    wrap.appendChild(icon);
}
const depositHelpStyle = document.createElement("style");
depositHelpStyle.textContent = `.deposit-title-with-help{display:inline-flex;align-items:center;gap:9px}.deposit-title-with-help h1,.deposit-title-with-help h2,.deposit-title-with-help h3{margin-right:0}.deposit-help{position:relative;display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;cursor:help;vertical-align:middle}.deposit-help img{width:22px;height:22px;display:block;cursor: pointer;filter: brightness(0) invert(1);}.deposit-help>span{position:absolute;left:32px;top:50%;transform:translateY(-50%);background:#10243f;color:#fff;padding:7px 11px;border-radius:6px;font-size:13px;font-weight:500;line-height:1.2;white-space:nowrap;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .18s ease;z-index:1000}.deposit-help:hover>span{opacity:1;visibility:visible}`;
document.head.appendChild(depositHelpStyle);

/* Bank In Transfer searchable dropdown */
const bankTransferDropdownStyle=document.createElement("style");
bankTransferDropdownStyle.textContent=`
.bank-selector{width:100%;box-sizing:border-box}
.bank-select-wrap{position:relative;width:100%}
.bank-select{width:100%;height:46px;border:1px solid #bfd0e5;border-radius:8px;background:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 16px;font-size:16px;color:#23364d;cursor:pointer;text-align:left;box-sizing:border-box}
.bank-dropdown{display:none;position:absolute;left:0;top:calc(100% + 2px);width:100%;background:#fff;border:1px solid #c7d2df;border-radius:4px;z-index:9999;box-sizing:border-box;box-shadow:0 8px 20px rgba(16,36,63,.14);overflow:hidden}
.bank-dropdown.show{display:block}
#bankSearch{display:block;width:calc(100% - 8px);height:34px;margin:4px;padding:0 10px;border:2px solid #333;border-radius:3px;box-sizing:border-box;font-size:14px;outline:none}
#bankOptions{max-height:230px;overflow-y:auto}
.bank-option{display:block;width:100%;min-height:42px;padding:10px 12px;border:0;background:#fff;color:#2c3540;text-align:left;font-size:14px;cursor:pointer;box-sizing:border-box}
.bank-option:hover,.bank-option.selected{background:#2d68bd;color:#fff}
`;
document.head.appendChild(bankTransferDropdownStyle);

initDepositHelp();
render();


/*close it when clicking blank space*/
document.addEventListener("click",function(e){

const packageDropdown=$("#depositPackageDropdown");
const packageWrap=e.target.closest(".deposit-package-wrap");

if(packageDropdown&&!packageWrap){
packageDropdown.classList.remove("show");
}


const paymentDropdown=$("#paymentChannelDropdown");
const paymentWrap=e.target.closest(".payment-channel-wrap");

if(paymentDropdown&&!paymentWrap){
paymentDropdown.classList.remove("show");
}


const bankDropdown=$("#bankDropdown");
const bankWrap=e.target.closest(".bank-select-wrap");

if(bankDropdown&&!bankWrap){
bankDropdown.classList.remove("show");
}
const receivingBankDropdown=$("#receivingBankDropdown");
const receivingBankWrap=e.target.closest(".receiving-bank-select-wrap");
if(receivingBankDropdown&&!receivingBankWrap){
receivingBankDropdown.classList.remove("show");
}

const cryptoDropdown=$("#cryptoNetworkDropdown");
const cryptoWrap=e.target.closest(".crypto-network-wrap");

if(cryptoDropdown&&!cryptoWrap){
cryptoDropdown.style.display="none";
}

});



function toggleCryptoNetworkDropdown(){
const dropdown=$("#cryptoNetworkDropdown");
if(!dropdown)return;
dropdown.style.display=dropdown.style.display==="block"?"none":"block";
}

function closeCryptoNetworkDropdown(){
const dropdown=$("#cryptoNetworkDropdown");
if(dropdown)dropdown.style.display="none";
}


function toggleBankDropdown(e){
if(e)e.stopPropagation();
const dropdown=$("#bankDropdown");
if(!dropdown)return;
dropdown.classList.toggle("show");
if(dropdown.classList.contains("show")){
const search=$("#bankSearch");
if(search)setTimeout(()=>search.focus(),0);
}
}

function toggleReceivingBankDropdown(e){
if(e)e.stopPropagation();
const dropdown=$("#receivingBankDropdown");
if(!dropdown)return;
dropdown.classList.toggle("show");
if(dropdown.classList.contains("show")){
const search=$("#receivingBankSearch");
if(search)setTimeout(()=>search.focus(),0);
}
}
function filterReceivingBanks(value){
const keyword=value.toLowerCase().trim();

document.querySelectorAll(".receiving-bank-option").forEach(option=>{
option.style.display=option.textContent.toLowerCase().includes(keyword)?"block":"none";
});
}
const receivingBankDropdownStyle=document.createElement("style");
receivingBankDropdownStyle.textContent=`.receiving-bank-select-wrap{position:relative;width:100%}#receivingBankDropdown{z-index:5000}#receivingBankOptions{max-height:230px;overflow-y:auto}.receiving-bank-option{display:block;width:100%;min-height:42px;padding:10px 12px;border:0;background:#fff;color:#2c3540;text-align:left;font-size:14px;cursor:pointer;box-sizing:border-box}.receiving-bank-option:hover,.receiving-bank-option.selected{background:#2d68bd;color:#fff}`;
document.head.appendChild(receivingBankDropdownStyle);
