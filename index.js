// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

let mfavoriteColor = new Set();

mfavoriteColor.add("Yellow");
mfavoriteColor.add("Pink");
mfavoriteColor.add("White");
mfavoriteColor.add("Purple");

let favResto = new Set();
favResto.add("Bento");
favResto.add("Sushi");
favResto.add("Pancake");
favResto.add("Eggy");
favResto.add("Tempura");
favResto.add("Bento");
favResto.add("Eggy");
favResto.add("Padang");
favResto.add("Tteok");
favResto.add("Sushi");
favResto.add("Sushi");

let name = "Monica";
let gender = "female";
let age= "17";
let email= "monica@dingdong.com";
let isHavePet= "Yes";

let edu = new Set();
edu.add({name: "SD 01", city: "Jakarta", graduate: "2016"});
edu.add ({name: "SMP 02", city: "Jakarta", graduate: "2019"});
edu.add ({name: "SMA 03", city: "Tangerang"});

const firstUser = {name: name,
                    gender: gender,
                    age: age,
                    email: email,
                    favoriteColor: [...mfavoriteColor],
                    isHavePet: isHavePet,
                    education: [...edu],
                    favoriteRestaurant: [...favResto]
                };


mfavoriteColor.clear();

mfavoriteColor.add("Blue");
mfavoriteColor.add("Black");
mfavoriteColor.add("Grey");

favResto.clear();
favResto.add("Tempura");
favResto.add("Bento");
favResto.add("Sushi");
favResto.add("Pancake");
favResto.add("Padang");
favResto.add("Katsu");
favResto.add("Geprek");
favResto.add("Pancake");
favResto.add("Eggy");

edu.clear();
edu.add({name: "SD 02", city: "Jakarta", graduate: "2010"});
edu.add ({name: "SMP 03", city: "Bogor", graduate: "2013"});
edu.add ({name: "SMA 01", city: "Surabaya", graduate: "2016"});
edu.add ({name: "Universitas Maju", city: "Tangerang"});

name = "Wendy";
gender = "Male";
age= "23";
email= "wendy@dingdong.com";
isHavePet= "No";

const secondUser = {name: name,
                        gender: gender,
                        age: age,
                        email: email,
                        favoriteColor: [...mfavoriteColor],
                        isHavePet: isHavePet,
                        education: [...edu],
                        favoriteRestaurant: [...favResto]
                    };

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];

users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};
