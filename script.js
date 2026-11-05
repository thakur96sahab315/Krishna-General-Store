// Demo catalogue: edit product names and prices here to match your shop stock.
const WHATSAPP_NUMBERS = ["919569654740", "919580835257"]; // Store WhatsApp contacts; first number is the default.
const products = [
 {id:1,name:"Velvet Matte Lipstick",category:"makeup",label:"Bestseller",price:249,desc:"Rich colour for a confident look",image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80"},
 {id:2,name:"Glow Foundation",category:"makeup",label:"Daily essential",price:399,desc:"A smooth, natural-looking finish",image:"https://images.unsplash.com/photo-1631214540242-5f6a1e4f4b7b?auto=format&fit=crop&w=700&q=80"},
 {id:3,name:"Kajal Eyeliner",category:"makeup",label:"Popular",price:99,desc:"Define your eyes with ease",image:"https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=80"},
 {id:4,name:"Colour Pop Nail Paint",category:"makeup",label:"New shades",price:79,desc:"Fun colour for every mood",image:"https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=700&q=80"},
 {id:5,name:"Daily Face Cream",category:"skincare",label:"Skin care",price:199,desc:"A simple everyday beauty pick",image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80"},
 {id:6,name:"Hydrating Skin Serum",category:"skincare",label:"Glow pick",price:349,desc:"Add a fresh step to your routine",image:"https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=80"},
 {id:7,name:"Classic Red Glass Bangles",category:"bangles",label:"Festive",price:299,desc:"Traditional colour, timeless charm",image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80"},
 {id:8,name:"Kundan Party Wear Set",category:"bangles",label:"Statement",price:799,desc:"A little sparkle for special days",image:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=80"},
 {id:9,name:"Golden Stone Bangles",category:"bangles",label:"Elegant",price:599,desc:"Beautiful detailing for celebrations",image:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=80"},
 {id:10,name:"Pastel Daily Wear Bangles",category:"bangles",label:"Everyday",price:199,desc:"Soft shades for everyday styling",image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80"},
 {id:11,name:"Fashion Hair Clips",category:"accessories",label:"Cute pick",price:89,desc:"A pretty finishing touch",image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80"},
 {id:12,name:"Statement Earrings",category:"accessories",label:"Trending",price:249,desc:"Style that stands out",image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80"},
 {id:13,name:"Everyday Rice Pack",category:"grocery",label:"Grocery",price:65,desc:"Sample listing — update pack size and price",image:"https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80"},
 {id:14,name:"Premium Tea Pack",category:"grocery",label:"Daily essential",price:120,desc:"Sample listing — update brand and price",image:"https://images.unsplash.com/photo-1544787219-7f47857e5f4b?auto=format&fit=crop&w=700&q=80"},
 {id:15,name:"Cooking Oil Bottle",category:"grocery",label:"Kitchen",price:145,desc:"Sample listing — update quantity and price",image:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=80"},
 {id:16,name:"Household Cleaning Essentials",category:"household",label:"Home care",price:99,desc:"Sample listing — confirm product and price",image:"https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=700&q=80"},
 {id:17,name:"Kitchen Storage Jar",category:"household",label:"Useful pick",price:149,desc:"Sample listing — confirm size and price",image:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=700&q=80"},
 {id:18,name:"Pooja Thali Set",category:"pooja",label:"Pooja essentials",price:299,desc:"Sample listing — update material and price",image:"https://images.unsplash.com/photo-1604608672516-9c6b5f3b1f8f?auto=format&fit=crop&w=700&q=80"},
 {id:19,name:"Decorative Diya Set",category:"pooja",label:"Festive",price:120,desc:"Sample listing — update quantity and price",image:"https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80"},
 {id:20,name:"Wedding Decoration Accessories",category:"wedding",label:"Celebration",price:499,desc:"Sample listing — confirm design and price",image:"https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=80"},
 {id:21,name:"Gift & Shagun Tray",category:"wedding",label:"Wedding favourite",price:349,desc:"Sample listing — update design and price",image:"https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=700&q=80"},
 {id:22,name:"Notebook & Stationery Set",category:"stationery",label:"Study essential",price:89,desc:"Sample listing — update contents and price",image:"https://images.unsplash.com/photo-1455390582262-044c?auto=format&fit=crop&w=700&q=80"}
];
let activeFilter="all", cart=[];
const grid=document.getElementById("productGrid");
const money=n=>"₹"+n.toLocaleString("en-IN");
function renderProducts(){
 const term=(document.getElementById("searchInput").value||"").toLowerCase();
 const shown=products.filter(p=>(activeFilter==="all"||p.category===activeFilter)&&(`${p.name} ${p.desc} ${p.category}`).toLowerCase().includes(term));
 grid.innerHTML=shown.length?shown.map(p=>`<article class="product-card"><div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="product-tag">${p.label}</span></div><div class="product-info"><div class="product-category">${p.category}</div><div class="product-name">${p.name}</div><div class="product-desc">${p.desc}</div><div class="product-foot"><span class="price">${money(p.price)}</span><button class="add-btn" data-add="${p.id}">+ Add to bag</button></div></div></article>`).join(""):`<p>No products found. Try another search.</p>`;
}
function setFilter(filter){activeFilter=filter;document.querySelectorAll(".category").forEach(b=>b.classList.toggle("active",b.dataset.filter===filter));renderProducts()}
document.querySelectorAll(".category").forEach(b=>b.addEventListener("click",()=>setFilter(b.dataset.filter)));
grid.addEventListener("click",e=>{const id=Number(e.target.dataset.add);if(!id)return;const item=cart.find(x=>x.id===id);item?item.qty++:cart.push({id,qty:1});renderCart();});
document.getElementById("searchInput").addEventListener("input",renderProducts);
document.getElementById("searchToggle").addEventListener("click",()=>{document.getElementById("searchPanel").classList.toggle("show");document.getElementById("searchInput").focus()});
document.querySelectorAll("[data-jump-filter]").forEach(a=>a.addEventListener("click",()=>setFilter(a.dataset.jumpFilter)));
const drawer=document.getElementById("cartDrawer"),overlay=document.getElementById("overlay");
function openCart(){drawer.classList.add("open");overlay.classList.add("show")}function closeCart(){drawer.classList.remove("open");overlay.classList.remove("show")}
document.getElementById("cartOpen").addEventListener("click",openCart);document.getElementById("cartClose").addEventListener("click",closeCart);overlay.addEventListener("click",closeCart);
function renderCart(){
 const count=cart.reduce((s,x)=>s+x.qty,0),total=cart.reduce((s,x)=>s+products.find(p=>p.id===x.id).price*x.qty,0);
 document.getElementById("cartCount").textContent=count;document.getElementById("cartTotal").textContent=money(total);
 document.getElementById("cartItems").innerHTML=cart.length?cart.map(x=>{const p=products.find(y=>y.id===x.id);return `<div class="cart-row"><div><b>${p.name}</b><small>${money(p.price)} each</small></div><div class="qty-controls"><button data-minus="${p.id}">−</button> ${x.qty} <button data-plus="${p.id}">+</button><button data-remove="${p.id}" aria-label="Remove"> × </button></div></div>`}).join(""):`<p class="empty-cart">Your bag is waiting for something lovely.</p>`;
}
document.getElementById("cartItems").addEventListener("click",e=>{let id=Number(e.target.dataset.plus||e.target.dataset.minus||e.target.dataset.remove);if(!id)return;let item=cart.find(x=>x.id===id);if(e.target.dataset.plus)item.qty++;else if(e.target.dataset.minus)item.qty--;else item.qty=0;cart=cart.filter(x=>x.qty>0);renderCart()});
function sendWhatsApp(){
 if(!cart.length){alert("Please add a product to your bag first.");return}
 const chosen = prompt("Send your order to which store WhatsApp number?\\n1. 9569654740\\n2. 9580835257", "1");
 const number = chosen === "2" ? WHATSAPP_NUMBERS[1] : WHATSAPP_NUMBERS[0];
 if(chosen !== null && chosen !== "1" && chosen !== "2"){alert("Please choose 1 or 2.");return}
 if(chosen === null)return;
 const lines=cart.map(x=>{const p=products.find(y=>y.id===x.id);return `${p.name} x ${x.qty} — ${money(p.price*x.qty)}`});
 const total=cart.reduce((s,x)=>s+products.find(p=>p.id===x.id).price*x.qty,0);
 const msg=`Hello Krishna General Store! I would like to enquire about these products:\n${lines.join("\n")}\nSubtotal: ${money(total)}\nPlease confirm availability.`;
 window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`,"_blank");
}
document.getElementById("checkoutBtn").addEventListener("click",sendWhatsApp);
document.getElementById("contactWhatsapp").addEventListener("click",e=>{e.preventDefault();const chosen=prompt("Chat with Krishna General Store:\\n1. 9569654740\\n2. 9580835257","1");if(chosen==="1"||chosen==="2"){window.open(`https://wa.me/${WHATSAPP_NUMBERS[Number(chosen)-1]}`,"_blank");}else if(chosen!==null){alert("Please choose 1 or 2.");}});
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.getElementById("year").textContent=new Date().getFullYear();
renderProducts();renderCart();

// Register service worker for PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .then(() => console.log("PWA Service Worker Registered"))
      .catch(error => console.error("PWA Error:", error));
  });
}