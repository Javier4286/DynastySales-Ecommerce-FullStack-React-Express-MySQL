drop database if exists ecommerce;
create database ecommerce;
use ecommerce;

CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    is_admin BOOLEAN DEFAULT 0 NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT NOT NULL,
    album VARCHAR(100) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    release_year INT NOT NULL,
    price DECIMAL(10 , 2 ) NOT NULL,
    stock INT NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt DATETIME DEFAULT NULL,
    FOREIGN KEY (category_id)
        REFERENCES categories (id)
);

CREATE TABLE IF NOT EXISTS orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    delivery_method ENUM('pickup', 'delivery') NOT NULL,
    shipping_address VARCHAR(255) NOT NULL,
    total DECIMAL(10 , 2 ) NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS orders_details (
    product_id INT NOT NULL,
    order_id INT NOT NULL,
    price DECIMAL(10 , 2 ) NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (product_id , order_id),
    FOREIGN KEY (product_id)
        REFERENCES products (id),
    FOREIGN KEY (order_id)
        REFERENCES orders (id)
);

CREATE TABLE IF NOT EXISTS shopping_carts (
    product_id INT NOT NULL,
    user_id INT NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (product_id , user_id),
    FOREIGN KEY (product_id)
        REFERENCES products (id),
    FOREIGN KEY (user_id)
        REFERENCES users (id)
);

insert into users (first_name, last_name, phone, email, password, address, is_admin) values ("Admin", "Dynasty", "+54 9 351 000-0000", "admin@dynastysales.com", "$2b$10$Z/ZhSDfKAjBrmbolNWbmeuam3dBIk98e7Guy1P49u1AH512awpNXO", "Av. Colón 1234", "1");

insert into categories (name) values ("Cuarteto"), ("Rock"), ("Thrash Metal"), ("Rock Nacional"), ("Heavy Metal"), ("Groove Metal"), ("Punk Rock"), ("Hard Rock"), ("Latin Pop");

insert into products (category_id, album, artist, release_year, price, stock, description, image) values
 
(1, "La Historia", "Carlos 'La Mona' Jimenez", 2001 , 1250.75, 3, "Album that brings together 19 emblematic hits of La Mona Jiménez, capturing the essence of Cordoban cuarteto with tracks like 'Corren Corren Los Segundos' and 'Ramito De Violetas'.", "http://localhost:3000/images/dynastysales-product-001.jpg"),

(9, "Laundry Service", "Shakira", 2001, 1250.00, 8, "Shakira's iconic 2001 crossover album. This CD features global hits 'Whenever, Wherever' and 'Underneath Your Clothes', blending pop, rock, and Andean sounds in its original high-quality format.", "http://localhost:3000/images/dynastysales-product-002.jpg"),

(2, "Live Era: '87–'93", "Guns N' Roses", 1999 , 5500.50, 11, "Double album with 22 live songs from various performances, includes an extra track in special editions.", "http://localhost:3000/images/dynastysales-product-003.jpg"),

(3, "Reign in Blood", "Slayer", 1986 , 1175.00, 18, "Third studio album, debut with an international label, produced by Rick Rubin.", "http://localhost:3000/images/dynastysales-product-004.jpg"),

(4, "Demasiado Ego", "Charly Garcia", 1999 , 1875.99, 2, "Live album recorded before 362,000 people, highlighting a record-breaking audience in Argentina.", "http://localhost:3000/images/dynastysales-product-005.jpg"),

(5, "Paranoid", "Black Sabbath", 1970 , 1500.00, 12, "1970 album, a Black Sabbath hit, considered a cult classic and the band's best-selling record.", "http://localhost:3000/images/dynastysales-product-006.jpg"),

(2, "Alive!", "Kiss", 1975 , 4575.50, 22, "First live album by Kiss, released in 1975, capturing the intensity of their shows and catapulting the band to fame.",  "http://localhost:3000/images/dynastysales-product-007.jpg"),

(6, "Vulgar Display of Power", "Pantera", 1992 , 2250.99, 6, "Influential 1992 album, key in groove metal, featuring iconic tracks like 'Walk' and 'Fucking Hostile'.", "http://localhost:3000/images/dynastysales-product-008.jpg"),

(9, "Fijación Oral, Vol. 1", "Shakira", 2005, 1320.75, 5, "The critically acclaimed 2005 Spanish-language album. Featuring the hit 'La Tortura', this CD delivers a sophisticated mix of pop and art-rock with the uncompressed audio quality fans demand.", "http://localhost:3000/images/dynastysales-product-009.jpg"),

(2, "Flashpoint", "The Rolling Stones", 1991 , 3700.50, 18, "Live album compiling songs from the Steel Wheels/Urban Jungle Tour, the first since 1982.", "http://localhost:3000/images/dynastysales-product-010.jpg"),

(1, "La Mona en Vivo con el Pueblo", "Carlos 'La Mona' Jimenez", 2003 , 1150.25, 2, "Tracklist divided into two parts: studio and stadium, with hits like 'La Mona Es Un Muchacho De Barrio' and 'El Pedazo De Mi Corazón'.", "http://localhost:3000/images/dynastysales-product-011.jpg"),

(7, "Loco Live", "Ramones", 1991 , 2450.99, 2, "Live album recorded in Barcelona in 1991, with two available versions. Includes tracks like 'Too Tough to Die' and 'Don't Bust My Chops'. Notable for being the first album with C.J. in the band.", "http://localhost:3000/images/dynastysales-product-012.jpg"),

(4, "Fabulosos Calavera", "Los Fabulosos Cadillacs", 1997 , 2800.00, 13, "This album stands out for its experimental sound and dark lyrics. It presents a unique mix of genres and achieved gold and platinum success.", "http://localhost:3000/images/dynastysales-product-013.jpg"),

(3, "Decade of Aggression", "Slayer", 1991 , 3590.25, 25, "Live album by Slayer, recorded during their 1991 concerts, marking the last participation of Lombardo on drums until 2004.", "http://localhost:3000/images/dynastysales-product-014.jpg"),

(4, "La Grasa de las Capitales", "Seru Giran", 1979 , 2900.75, 14, "Studio album by the Argentine band, with a more direct and simple approach, leaving behind the orchestra of the first album. Considered one of the best works of national rock.", "http://localhost:3000/images/dynastysales-product-015.jpg"),

(2, "The Very Best of Kiss", "Kiss", 2002 , 3750.00, 21, "Compilation that brings together the 21 greatest hits of the hard rock band, with original versions of iconic tracks like 'Rock and Roll All Nite' and 'Detroit Rock City'. A journey through their best songs.", "http://localhost:3000/images/dynastysales-product-016.jpg"),

(1, "¡¡Bien ahí!!", "Carlos 'La Mona' Jimenez", 1999 , 1700.00, 5, "This album gathers great cuarteto hits, such as 'Despierta Corazón', 'Ramito de Violetas', and more.", "http://localhost:3000/images/dynastysales-product-017.jpg"),

(3, "That One Night: Live in Buenos Aires", "Megadeth", 2007 , 3500.00, 17, "Album capturing the energy of the concert in Buenos Aires, where the band presented their live music, including acoustic versions and important announcements.", "http://localhost:3000/images/dynastysales-product-018.jpg"),

(4, "Adiós Sui Géneris volumen III", "Sui Géneris", 1996 , 2300.00, 2, "This album features unreleased songs recorded during the band's farewell concerts in 1975, completing the trilogy.", "http://localhost:3000/images/dynastysales-product-019.jpg"),

(9, "Dónde Están los Ladrones?", "Shakira", 1998, 1100.25, 12, "Widely considered her best work, this 1998 masterpiece includes 'Ciega, Sordomuda' and 'Ojos Así'. A definitive Latin rock-pop CD with the raw energy and poetic lyrics that defined an era.", "http://localhost:3000/images/dynastysales-product-020.jpg"),

(3, "Live Shit: Binge & Purge", "Metallica", 1993 , 4999.99, 10, "Compilation album including 3 CDs with Metallica's concert recordings, released in 1993, capturing the energy of various tours.", "http://localhost:3000/images/dynastysales-product-021.jpg"),

(4, "El Aguante", "Charly Garcia", 1998 , 2200.50, 4, "Album released in 1998, presenting unreleased tracks like 'Pedro trabaja en el cine'. Includes collaborations with Joaquín Sabina.", "http://localhost:3000/images/dynastysales-product-022.jpg"),

(2, "Live at the Greek", "Jimmy Page & The Black Crowes", 2000 , 3300.00, 1, "Recorded during 1999 concerts, the setlist includes Led Zeppelin classics and blues.", "http://localhost:3000/images/dynastysales-product-023.jpg"),

(2, "MTV Unplugged", "Kiss", 1996 , 2450.50, 2, "Historic concert from 1995, where Kiss reunited with the original members for MTV Unplugged, surprising fans.", "http://localhost:3000/images/dynastysales-product-024.jpg"),

(1, "La Mona una Leyenda en Pie", "Carlos 'La Mona' Jimenez", 2019 , 2500.75, 9, "Features songs like '10 Monedas', 'La marcha del caracol', 'Azul quedó', 'Fugitivo', 'La historia del perejil', 'Porque te vas', and 'El guapachoso'.", "http://localhost:3000/images/dynastysales-product-025.jpg"),

(9, "Pies Descalzos", "Shakira", 1996, 899.50, 15, "The 1996 CD edition that launched Shakira's international career. Featuring hits like 'Estoy Aquí' and 'Antología' with original high-fidelity sound and 90s artwork. A core piece for any Latin pop-rock collection.", "http://localhost:3000/images/dynastysales-product-026.jpg"),

(8, "Live at River Plate", "AC/DC", 2011 , 5500.00, 12, "Concerts at Buenos Aires' Monumental Stadium, capturing the energy and great classics of the band.", "http://localhost:3000/images/dynastysales-product-027.jpg"),

(2, "Alive! The Millennium Concert", "Kiss", 2006 , 2900.00, 15, "Concert recorded in 1999 in Vancouver, originally planned as 'Alive IV', released in 2006. It is the last album with the original lineup and contains iconic tracks like 'Rock and Roll All Nite'.", "http://localhost:3000/images/dynastysales-product-028.jpg")