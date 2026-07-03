enum Rate {
    low = "Thấp",
    medium = "Trung bình",
    high = "Cao"
}

type Product = {
    name: string;
    price: number;
    sale: boolean;
    rate: Rate;
}

let listProducts: Product[] = [
    {
        name: "Bánh",
        price: 3,
        sale: true,
        rate: Rate.low
    },
    {
        name: "Sữa",
        price: 8,
        sale: true,
        rate: Rate.high
    },
    {
        name: "Nước ngọt",
        price: 6,
        sale: false,
        rate: Rate.medium
    },
    {
        name: "Mì tôm",
        price: 4,
        sale: true,
        rate: Rate.medium
    },
    {
        name: "Kẹo",
        price: 2,
        sale: false,
        rate: Rate.low
    }
];

let newProducts = listProducts.map(item => {
    return {
        ...item,
        description: item.price > 5 ? "Tốt" : "Bình thường"
    };
});

console.log("Danh sách sau khi thêm description:");
console.log(newProducts);

function showProducts() {
    newProducts.forEach(item => {
        console.log("Tên:", item.name);
        console.log("Giá:", item.price);
        console.log("Sale:", item.sale);
        console.log("Đánh giá:", item.rate);
        console.log("Mô tả:", item.description);
        console.log("----------------------------");
    });
}

showProducts();

function totalPrice() {
    let total = newProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    console.log("Tổng giá sản phẩm:", total);
}

totalPrice();

function filterProducts() {
    let result = newProducts.filter(item => {
        return item.sale &&
            (item.rate == Rate.medium || item.rate == Rate.high);
    });

    console.log("Sản phẩm đang Sale và đánh giá từ Trung bình trở lên:");
    console.log(result);
}

filterProducts();