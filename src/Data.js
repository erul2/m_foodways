// initialize dummy data on local storage
let users = [];
let user = {
  id: 1,
  status: 0,
};

if (typeof Storage !== "undefined") {
  if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
  }
  if (localStorage.getItem("isLogin") == null) {
    localStorage.setItem("isLogin", "false");
  }

  localStorage.setItem("users", JSON.stringify(users));
} else {
  console.log("No Web Storage support");
}

export function register(user) {
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

export function login(email, password) {
  let status = "";
  for (let u of users) {
    if (u.email === email) {
      if (u.password === password) {
        status = user.status;
        const login = {
          id: u.id,
          status: u.status,
          name: u.name,
          avatar: u.avatar,
        };
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("user", JSON.stringify(login));
        console.log("login success");
        return true;
      }
    }
  }
}

export function logout() {
  localStorage.setItem("isLogin", "false");
  localStorage.setItem("user", null);
}

export const isLogin =
  localStorage.getItem("isLogin") === "true" ? true : false;

export const userSession = JSON.parse(localStorage.getItem("user"));

export function getUser(id) {
  const user = JSON.parse(localStorage.getItem("users"));
  for (let u of user) {
    if (u.id == id) {
      return u;
    }
  }
}

export function popularResto() {
  const PopularResto = [];
  let popular = JSON.parse(localStorage.getItem("popular"));
  for (let p of popular) {
    const user = getUser(p.restoId);
    PopularResto.push({
      id: p.restoId,
      name: user.name,
      location: user.location,
      img: user.avatar,
    });
  }

  return PopularResto;
}

export function nearResto() {
  const NearResto = [];
  const near = JSON.parse(localStorage.getItem("near"));
  for (let n of near) {
    const user = getUser(n.restoId);
    NearResto.push({
      id: n.restoId,
      name: user.name,
      location: user.location,
      img: user.avatar,
    });
  }

  return NearResto;
}

export function getRestoName(id) {
  const resto = JSON.parse(localStorage.getItem("users"));
  for (let r of resto) {
    if (r.id == id) {
      return r.name;
    }
  }
}

export function getMenus(id) {
  const menus = [];
  const menu = JSON.parse(localStorage.getItem("menus"));
  for (let m of menu) {
    if (m.pId == id) {
      menus.push(m);
    }
  }
  if (menus.length < 1) {
    console.log("Kosong");
  } else {
    return menus;
  }
}

export function getOrders() {
  const ordersData = [];
  const orders = JSON.parse(localStorage.getItem("orders"));
  const menus = JSON.parse(localStorage.getItem("menus"));
  for (let o of orders) {
    for (let m of menus) {
      if (o.menuId == m.id) {
        ordersData.push({
          id: o.id,
          name: m.name,
          qty: o.qty,
          img: m.img,
          price: m.price,
        });
      }
    }
  }
  return ordersData;
}

export function addOrder(order) {
  const orders = getOrders();
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
}

export function deleteOrder(id) {
  const orders = getOrders();
  orders.splice(orders.indexOf(id), 1);
  localStorage.setItem("orders", JSON.stringify(orders));
}

export function setQty(id, qty) {
  const orders = getOrders();
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id == id) {
      orders[i].qty = qty;
    }
  }
  localStorage.setItem("orders", JSON.stringify(orders));
}

// const orders = [
//   { id: 1, qty: 1, menuId: 0 },
//   { id: 2, qty: 1, menuId: 1 },
// ];

// localStorage.setItem("orders", JSON.stringify(orders));

// const geprek = [
//   {
//     id: 1,
//     name: "Paket Geprek",
//     price: 15000,
//     img: "paket-geprek.png",
//     pId: 1,
//   },
//   {
//     id: 2,
//     name: "Paket Geprek Keju",
//     price: 20000,
//     img: "paket-geprek-keju.png",
//     pId: 1,
//   },
//   {
//     id: 3,
//     name: "Paket Geprek Leleh",
//     price: 25000,
//     img: "paket-geprek-leleh.png",
//     pId: 1,
//   },
//   {
//     id: 4,
//     name: "Paket Sambel Matah",
//     price: 15000,
//     img: "paket-sambel-matah.png",
//     pId: 1,
//   },
//   {
//     id: 5,
//     name: "Mie Ayam Geprek",
//     price: 17000,
//     img: "mie-ayam-geprek.png",
//     pId: 1,
//   },
//   {
//     id: 6,
//     name: "Mie Ayam Geprek Keju",
//     price: 22000,
//     img: "mie-ayam-geprek-keju.png",
//     pId: 1,
//   },
//   {
//     id: 7,
//     name: "Mie Ayam Leleh",
//     price: 27000,
//     img: "mie-ayam-leleh.png",
//     pId: 1,
//   },
//   {
//     id: 8,
//     name: "Mie Ayam Sambel Telur Asin",
//     price: 17000,
//     img: "mie-ayam-sambel-telor-asin.png",
//     pId: 1,
//   },
// ];

// localStorage.setItem("menus", JSON.stringify(geprek));

// const pop = [
//   { id: 1, restoId: 3 },
//   { id: 2, restoId: 4 },
//   { id: 3, restoId: 5 },
//   { id: 4, restoId: 6 },
// ];

// const near = [
//   { id: 1, restoId: 2 },
//   { id: 2, restoId: 7 },
//   { id: 3, restoId: 8 },
//   { id: 4, restoId: 9 },
// ];

// localStorage.setItem("popular", JSON.stringify(pop));
// localStorage.setItem("near", JSON.stringify(near));

// {
//   id: 1,
//   name: "Geprek Bensu",
//   email: "geprekbensu@mail.com",
//   password: "12345",
//   phone: "085123456789",
//   status: 1,
//   avatar: "geprek-bensu-circle.png",
//   location: {
//     lat: 0,
//     long: 0,
//   },

// const newUser = [
//   {
//     id: 1,
//     name: "Geprek Bensu",
//     email: "geprekbensu@mail.com",
//     password: "12345",
//     phone: "085123456789",
//     status: 1,
//     avatar: "geprek-bensu-circle.png",
//     location: { lat: 0, long: 0 },
//   },
//   {
//     id: 2,
//     name: "Andi",
//     email: "Andi@mail.com",
//     password: "12345",
//     phone: "085123456789",
//     status: 0,
//     avatar: "andi.png",
//     location: { lat: 0, long: 0 },
//   },
//   {
//     id: 3,
//     name: "Burger King",
//     email: "burgerking@mail.com",
//     password: "12345",
//     phone: "085123456789",
//     status: 1,
//     avatar: "burger-king-circle.png",
//     location: {
//       lat: 0,
//       long: 0,
//     },
//   },
//   {
//     id: 4,
//     name: "Star Bucks",
//     email: "starbucks@mail.com",
//     password: "12345",
//     phone: "085123456789",
//     status: 1,
//     avatar: "star-buks-circle.png",
//     location: {
//       lat: 0,
//       long: 0,
//     },
//   },
//   {
//     id: 5,
//     name: "KFC",
//     email: "kfc@mail.com",
//     password: "12345",
//     phone: "085123456789",
//     status: 1,
//     avatar: "kfc-circle.png",
//     location: {
//       lat: 0,
//       long: 0,
//     },
//   },
//   {
//     id: 6,
//     name: "Jco",
//     email: "jco@mail.com",
//     password: "12345",
//     phone: "085123456789",
//     status: 1,
//     avatar: "jco-circle.png",
//     location: {
//       lat: 0,
//       long: 0,
//     },
//   },
//   {
//     id: 7,
//     name: "Nasi Goreng Mas Rony",
//     email: "nasgor@mail.com",
//     password: "12345",
//     phone: "085123456789",
//     status: 1,
//     avatar: "nasgor.png",
//     location: {
//       lat: 0,
//       long: 0,
//     },
//   },
//   {
//     id: 8,
//     name: "Pecel Ayam Prambanan",
//     email: "pecelayam@mail.com",
//     password: "12345",
//     phone: "085123456789",
//     status: 1,
//     avatar: "pecelayam.png",
//     location: {
//       lat: 0,
//       long: 0,
//     },
//   },
//   {
//     id: 9,
//     name: "Kopi Kenangan",
//     email: "kopikenangan@mail.com",
//     password: "12345",
//     phone: "085123456789",
//     status: 1,
//     avatar: "kopikenangan.png",
//     location: {
//       lat: 0,
//       long: 0,
//     },
//   },
// ];

// localStorage.setItem("users", JSON.stringify(newUser));
