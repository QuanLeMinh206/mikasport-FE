import {
    ChartColumn,
    Home,
    NotepadText,
    Package,
    PackagePlus,
    Settings,
    Users,
    Gift,
    UserPlus,
    ShoppingBag,
    UserCheck,
    MessageCircle,
    ListFilter,
    ListFilterPlus,
    NotebookText,
    NotebookPen,
    TicketCheck,
    TicketPlus,
    BadgeDollarSign,
    BadgePercent,
} from "lucide-react";
import ProfileImage from "@/assets/profile-img.jpg";
import ProductImage from "@/assets/product-img.png";
import blogImg1 from "@/assets/blogs.jpg";
import blogImg2 from "@/assets/blogs1.jpg";
import blogImg3 from "@/assets/blog2.jpg";

export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "",
            },
        ],
    },
    {
        title: "Products",
        links: [
            {
                label: "Products",
                icon: Package,
                path: "products",
            },
            {
                label: "New product",
                icon: PackagePlus,
                path: "products/new",
            },
        ],
    },
    {
        title: "Categories",
        links: [
            {
                label: "Categories",
                icon: ListFilter,
                path: "categories",
            },
            {
                label: "New category",
                icon: ListFilterPlus,
                path: "categories/new",
            },
        ],
    },
    {
        title: "Orders",
        links: [
            {
                label: "Orders",
                icon: Gift,
                path: "orders",
            },
        ],
    },
    {
        title: "Users",
        links: [
            {
                label: "Users",
                icon: Users,
                path: "users",
            },
            {
                label: "Comments",
                icon: MessageCircle,
                path: "comments",
            },
        ],
    },
    {
        title: "Blogs",
        links: [
            {
                label: "Blogs",
                icon: NotebookText,
                path: "blogs",
            },
            {
                label: "New blog",
                icon: NotebookPen,
                path: "blogs/new",
            },
        ],
    },
    {
        title: "Promotions",
        links: [
            {
                label: "Promotions",
                icon: BadgePercent,
                path: "promotions",
            },
            {
                label: "New promotion",
                icon: BadgeDollarSign,
                path: "promotions/new",
            },
        ],
    },
    {
        title: "Vouchers",
        links: [
            {
                label: "Vouchers",
                icon: TicketCheck,
                path: "vouchers",
            },
            {
                label: "New voucher",
                icon: TicketPlus,
                path: "vouchers/new",
            },
        ],
    },
];

export const monthlyData = [
    { name: "Jan", total: 15000000 },
    { name: "Feb", total: 18000000 },
    { name: "Mar", total: 17000000 },
    { name: "Apr", total: 19000000 },
    { name: "May", total: 21000000 },
    { name: "Jun", total: 22000000 },
    { name: "Jul", total: 23000000 },
    { name: "Aug", total: 25000000 },
    { name: "Sep", total: 20000000 },
    { name: "Oct", total: 27000000 },
    { name: "Nov", total: 26000000 },
    { name: "Dec", total: 28000000 },
];
export const categoryData = [
    { name: "Football", orders: 1200 },
    { name: "Running", orders: 950 },
    { name: "Basketball", orders: 500 },
    { name: "Tennis", orders: 350 },
    { name: "Workout", orders: 300 },
];
export const recentSalesData = [
    {
        id: 1,
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        image: ProfileImage,
        total: 150000,
    },
    {
        id: 2,
        name: "James Anderson",
        email: "james.anderson@email.com",
        image: ProfileImage,
        total: 2300000,
    },
    {
        id: 3,
        name: "Sophia Johnson",
        email: "sophia.johnson@email.com",
        image: ProfileImage,
        total: 1800000,
    },
    {
        id: 4,
        name: "Liam Brown",
        email: "liam.brown@email.com",
        image: ProfileImage,
        total: 275000,
    },
    {
        id: 5,
        name: "Emma Wilson",
        email: "emma.wilson@email.com",
        image: ProfileImage,
        total: 320000,
    },
];

export const topProductsData = [
    {
        number: 1,
        name: "Adidas Tiro 23 Training Jersey",
        image: ProductImage,
        description: "Lightweight and breathable training jersey.",
        price: 29.99,
        quantity: 23,
        s: 5,
        m: 4,
        l: 10,
        xl: 2,
        xxl: 2,
        rating: 4.5,
        category: "Football",
    },
    {
        number: 2,
        name: "Adidas Entrada 22 Jersey",
        image: ProductImage,
        description: "Classic Adidas jersey with moisture-wicking fabric.",
        price: 24.99,
        quantity: 23,
        s: 5,
        m: 4,
        l: 10,
        xl: 2,
        xxl: 2,
        rating: 4.5,
        category: "Football",
    },
    {
        number: 3,
        name: "Adidas Squadra 21 Training Shirt",
        image: ProductImage,
        description: "Slim-fit training shirt with Adidas Aeroready technology.",
        price: 34.99,
        quantity: 23,
        s: 5,
        m: 4,
        l: 10,
        xl: 2,
        xxl: 2,
        rating: 4.5,
        category: "Football",
    },
    {
        number: 4,
        name: "Adidas Condivo 22 Jersey",
        image: ProductImage,
        description: "Performance jersey designed for high-intensity workouts.",
        price: 39.99,
        quantity: 23,
        s: 5,
        m: 4,
        l: 10,
        xl: 2,
        xxl: 2,
        rating: 4.5,
        category: "Football",
    },
    {
        number: 5,
        name: "Adidas Regista 20 Jersey",
        image: ProductImage,
        description: "Soft-touch fabric with sweat-wicking properties.",
        price: 27.99,
        quantity: 23,
        s: 5,
        m: 4,
        l: 10,
        xl: 2,
        xxl: 2,
        rating: 4.5,
        category: "Football",
    },
    {
        number: 6,
        name: "Adidas Tabela 18 Jersey",
        image: ProductImage,
        description: "Comfortable and stylish jersey for everyday training.",
        price: 22.99,
        quantity: 23,
        s: 5,
        m: 4,
        l: 10,
        xl: 2,
        xxl: 2,
        rating: 4.5,
        category: "Football",
    },
    {
        number: 7,
        name: "Adidas Estro 19 Jersey",
        image: ProductImage,
        description: "Lightweight jersey with Adidas signature stripes.",
        price: 19.99,
        quantity: 23,
        s: 5,
        m: 4,
        l: 10,
        xl: 2,
        xxl: 2,
        rating: 4.5,
        category: "Football",
    },
    {
        number: 8,
        name: "Adidas Campeon 21 Jersey",
        image: ProductImage,
        description: "Game-ready jersey with professional fit and feel.",
        price: 49.99,
        quantity: 23,
        s: 5,
        m: 4,
        l: 10,
        xl: 2,
        xxl: 2,
        rating: 4.5,
        category: "Football",
    },
    {
        number: 9,
        name: "Adidas Striped 21 Jersey",
        image: ProductImage,
        description: "Striped design with premium fabric and ventilation.",
        price: 35.99,
        quantity: 23,
        s: 5,
        m: 4,
        l: 10,
        xl: 2,
        xxl: 2,
        rating: 4.5,
        category: "Football",
    },
    {
        number: 10,
        name: "Adidas Entrada 18 Jersey",
        image: ProductImage,
        description: "Simple yet stylish jersey for training and casual wear.",
        price: 20.99,
        quantity: 23,
        s: 5,
        m: 4,
        l: 10,
        xl: 2,
        xxl: 2,
        rating: 4.5,
        category: "Football",
    },
    {
        number: 11,
        name: "Adidas Entrada 18 Jersey",
        image: ProductImage,
        description: "Simple yet stylish jersey for training and casual wear.",
        price: 20.99,
        quantity: 23,
        s: 5,
        m: 4,
        l: 10,
        xl: 2,
        xxl: 2,
        rating: 4.5,
        category: "Football",
    },
];

export const categories = [
    {
        number: 1,
        name: "Football",
    },

    {
        number: 2,
        name: "Running",
    },

    {
        number: 3,
        name: "Basketball",
    },

    {
        number: 4,
        name: "Tennis",
    },

    {
        number: 5,
        name: "Workout",
    },
];
export const ordersData = [
    {
        number: 1,
        userName: "Nguyen Van A",
        totalPrice: 1200000,
        orderDate: "2024-03-15",
        status: "pending",
        paymentMethod: "Credit Card",
    },
    {
        number: 2,
        userName: "Tran Thi B",
        totalPrice: 850000,
        orderDate: "2024-03-14",
        status: "delivered",
        paymentMethod: "Bank Transfer",
    },
    {
        number: 3,
        userName: "Le Van C",
        totalPrice: 670000,
        orderDate: "2024-03-13",
        status: "shipped",
        paymentMethod: "Cash on Delivery",
    },
    {
        number: 4,
        userName: "Pham Thi D",
        totalPrice: 920000,
        orderDate: "2024-03-12",
        status: "pending",
        paymentMethod: "Momo",
    },
    {
        number: 5,
        userName: "Hoang Van E",
        totalPrice: 1450000,
        orderDate: "2024-03-11",
        status: "delivered",
        paymentMethod: "ZaloPay",
    },
    {
        number: 6,
        userName: "Bui Thi F",
        totalPrice: 530000,
        orderDate: "2024-03-10",
        status: "shipped",
        paymentMethod: "Credit Card",
    },
    {
        number: 7,
        userName: "Nguyen Van G",
        totalPrice: 780000,
        orderDate: "2024-03-09",
        status: "pending",
        paymentMethod: "Cash on Delivery",
    },
    {
        number: 8,
        userName: "Pham Thi H",
        totalPrice: 1100000,
        orderDate: "2024-03-08",
        status: "delivered",
        paymentMethod: "Bank Transfer",
    },
    {
        number: 9,
        userName: "Tran Van I",
        totalPrice: 940000,
        orderDate: "2024-03-07",
        status: "shipped",
        paymentMethod: "Momo",
    },
    {
        number: 10,
        userName: "Le Thi K",
        totalPrice: 1350000,
        orderDate: "2024-03-06",
        status: "pending",
        paymentMethod: "ZaloPay",
    },
];

export const usersData = [
    {
        id: 1,
        name: "Nguyen Van A",
        img: ProfileImage,
        email: "nguyenvana@example.com",
        phone: "0901234567",
        totalOrders: 5,
    },
    {
        id: 2,
        name: "Tran Thi B",
        img: ProfileImage,
        email: "tranthib@example.com",
        phone: "0912345678",
        totalOrders: 2,
    },
    {
        id: 3,
        name: "Le Van C",
        img: ProfileImage,
        email: "levanc@example.com",
        phone: "0923456789",
        totalOrders: 8,
    },
    {
        id: 4,
        name: "Pham Thi D",
        img: ProfileImage,
        email: "phamthid@example.com",
        phone: "0934567890",
        totalOrders: 1,
    },
    {
        id: 5,
        name: "Hoang Van E",
        img: ProfileImage,
        email: "hoangvane@example.com",
        phone: "0945678901",
        totalOrders: 10,
    },
    {
        id: 6,
        name: "Bui Thi F",
        img: ProfileImage,
        email: "buithif@example.com",
        phone: "0956789012",
        totalOrders: 3,
    },
    {
        id: 7,
        name: "Dang Van G",
        img: ProfileImage,
        email: "dangvang@example.com",
        phone: "0967890123",
        totalOrders: 6,
    },
    {
        id: 8,
        name: "Nguyen Thi H",
        img: ProfileImage,
        email: "nguyenthih@example.com",
        phone: "0978901234",
        totalOrders: 4,
    },
    {
        id: 9,
        name: "Tran Van I",
        img: ProfileImage,
        email: "tranvani@example.com",
        phone: "0989012345",
        totalOrders: 7,
    },
    {
        id: 10,
        name: "Le Thi J",
        img: ProfileImage,
        email: "lethij@example.com",
        phone: "0990123456",
        totalOrders: 9,
    },
];

export const commentsData = [
    {
        id: 1,
        product: "Sports Jacket",
        productImg: ProductImage,
        title: "Rất hài lòng!",
        message: "Áo đẹp, chất lượng tốt, giao hàng nhanh.",
        userName: "Nguyen Van A",
        profileImg: ProfileImage,
        commentDate: "2024-03-15",
    },
    {
        id: 2,
        product: "Running Shoes",
        productImg: ProductImage,
        title: "Thoải mái và bền",
        message: "Giày rất nhẹ và êm, chạy bộ rất thích.",
        userName: "Tran Thi B",
        profileImg: ProfileImage,
        commentDate: "2024-03-14",
    },
    {
        id: 3,
        product: "Smartwatch Pro",
        productImg: ProductImage,
        title: "Tuyệt vời",
        message: "Pin trâu, nhiều tính năng hữu ích.",
        userName: "Le Van C",
        profileImg: ProfileImage,
        commentDate: "2024-03-13",
    },
    {
        id: 4,
        product: "Wireless Earbuds",
        productImg: ProductImage,
        title: "Âm thanh chất lượng",
        message: "Nghe nhạc hay, kết nối ổn định.",
        userName: "Pham Thi D",
        profileImg: ProfileImage,
        commentDate: "2024-03-12",
    },
    {
        id: 5,
        product: "Gaming Keyboard",
        productImg: ProductImage,
        title: "Phím bấm nhạy",
        message: "Gõ sướng tay, đèn RGB đẹp.",
        userName: "Hoang Van E",
        profileImg: ProfileImage,
        commentDate: "2024-03-11",
    },
    {
        id: 6,
        product: "Mechanical Mouse",
        productImg: ProductImage,
        title: "Chuột nhạy",
        message: "Cảm biến tốt, phản hồi nhanh.",
        userName: "Bui Thi F",
        profileImg: ProfileImage,
        commentDate: "2024-03-10",
    },
    {
        id: 7,
        product: "4K Monitor",
        productImg: ProductImage,
        title: "Màn đẹp",
        message: "Hình ảnh sắc nét, phù hợp chơi game và làm việc.",
        userName: "Dang Van G",
        profileImg: ProfileImage,
        commentDate: "2024-03-09",
    },
    {
        id: 8,
        product: "Office Chair",
        productImg: ProductImage,
        title: "Ghế êm, ngồi lâu không mỏi",
        message: "Chất liệu tốt, phù hợp làm việc văn phòng.",
        userName: "Nguyen Thi H",
        profileImg: ProfileImage,
        commentDate: "2024-03-08",
    },
    {
        id: 9,
        product: "Portable Speaker",
        productImg: ProductImage,
        title: "Loa bass mạnh",
        message: "Âm thanh hay, pin dùng lâu.",
        userName: "Tran Van I",
        profileImg: ProfileImage,
        commentDate: "2024-03-07",
    },
    {
        id: 10,
        product: "Fitness Tracker",
        productImg: ProductImage,
        title: "Theo dõi sức khỏe tốt",
        message: "Đo nhịp tim chính xác, đồng bộ tốt với điện thoại.",
        userName: "Le Thi J",
        profileImg: ProfileImage,
        commentDate: "2024-03-06",
    },
];

export const blogsData = [
    {
        id: 1,
        title: "Top 5 Mẹo Cải Thiện Kỹ Năng Chơi Bóng Đá",
        content: `
            <p>Bóng đá là môn thể thao vua, yêu cầu kỹ thuật và thể lực. Dưới đây là 5 mẹo giúp bạn cải thiện kỹ năng:</p>
            <ul>
                <li><strong>Kiểm soát bóng:</strong> Luyện tập dẫn bóng hàng ngày.</li>
                <li><strong>Sút bóng chính xác:</strong> Tập đá vào mục tiêu nhỏ.</li>
                <li><strong>Thể lực bền bỉ:</strong> Chạy bền và tập gym.</li>
                <li><strong>Chiến thuật thông minh:</strong> Xem và học từ các cầu thủ chuyên nghiệp.</li>
                <li><strong>Chơi theo nhóm:</strong> Phối hợp tốt với đồng đội.</li>
            </ul>
            <img src= "${blogImg1}" alt="Football Training" />
        `,
        blogDate: "2024-03-15",
    },
    {
        id: 2,
        title: "Hướng Dẫn Chạy Bộ Đúng Cách Cho Người Mới Bắt Đầu",
        content: `
            <p>Chạy bộ là một trong những môn thể thao đơn giản nhưng mang lại nhiều lợi ích. Dưới đây là hướng dẫn cho người mới:</p>
            <ol>
                <li><strong>Khởi động kỹ:</strong> Giúp cơ thể làm quen với vận động.</li>
                <li><strong>Chạy đúng tư thế:</strong> Giữ lưng thẳng, đánh tay tự nhiên.</li>
                <li><strong>Điều chỉnh nhịp thở:</strong> Hít vào bằng mũi, thở ra bằng miệng.</li>
                <li><strong>Tăng tốc từ từ:</strong> Không nên chạy quá nhanh ngay từ đầu.</li>
                <li><strong>Chọn giày phù hợp:</strong> Giày chạy bộ tốt giúp bảo vệ đôi chân.</li>
            </ol>
            <img src="${blogImg2}" alt="Running Guide" />
        `,
        blogDate: "2024-03-12",
    },
    {
        id: 3,
        title: "Những Đôi Giày Chạy Bộ Tốt Nhất Năm 2024",
        content: `
            <p>Chọn một đôi giày phù hợp sẽ giúp bạn chạy bộ thoải mái và tránh chấn thương. Dưới đây là 3 đôi giày chạy bộ tốt nhất năm 2024:</p>
            <ul>
                <li><strong>Nike Air Zoom Pegasus 40:</strong> Nhẹ, êm, phù hợp chạy đường dài.</li>
                <li><strong>Adidas Ultraboost 23:</strong> Đệm boost mềm mại, hỗ trợ tốt cho bàn chân.</li>
                <li><strong>Asics Gel-Kayano 30:</strong> Thiết kế ổn định, giảm áp lực lên khớp.</li>
            </ul>
            <img src="${blogImg3}" alt="Best Running Shoes" />
        `,
        blogDate: "2024-03-10",
    },
];

export const promotionsData = [
    {
        id: 1,
        title: "Tết Nguyên Đán Siêu Sale",
        desc: "Chào mừng năm mới với ưu đãi hấp dẫn lên đến 20% cho mọi đơn hàng.",
        discountValue: 20,
        startDate: "2025-01-20",
        endDate: "2025-02-10",
    },
    {
        id: 2,
        title: "Ngày Quốc tế Phụ nữ 8/3",
        desc: "Ưu đãi đặc biệt dành cho chị em phụ nữ - giảm ngay 15% cho đơn từ 1 triệu.",
        discountValue: 15,
        startDate: "2025-03-06",
        endDate: "2025-03-08",
    },
    {
        id: 3,
        title: "Giỗ Tổ Hùng Vương",
        desc: "Mua sắm thả ga - Nhận ngay ưu đãi 10% khi mua từ 2 sản phẩm.",
        discountValue: 10,
        startDate: "2025-04-15",
        endDate: "2025-04-20",
    },
    {
        id: 4,
        title: "Ngày Giải phóng miền Nam 30/4 & Quốc tế Lao động 1/5",
        desc: "Mừng đại lễ - Giảm ngay 5% cho mọi đơn hàng.",
        discountValue: 5,
        startDate: "2025-04-29",
        endDate: "2025-05-02",
    },
    {
        id: 5,
        title: "Black Friday 2025",
        desc: "Săn sale khủng - Giảm ngay 18% tất cả các mặt hàng.",
        discountValue: 18,
        startDate: "2025-11-28",
        endDate: "2025-11-30",
    },
];
export const vouchersData = [
    {
        id: 1,
        code: "TET2025",
        discountValue: 50000, // Giảm 50,000 VND
        minOrderValue: 300000, // Đơn hàng tối thiểu 300,000 VND
        startDate: "2025-01-15",
        endDate: "2025-02-15",
    },
    {
        id: 2,
        code: "SUMMER10",
        discountValue: 300000, //
        minOrderValue: 500000, // Đơn hàng tối thiểu 500,000 VND
        startDate: "2025-06-01",
        endDate: "2025-06-30",
    },
    {
        id: 3,
        code: "BACK2SCHOOL",
        discountValue: 70000, // Giảm 70,000 VND
        minOrderValue: 400000, // Đơn hàng tối thiểu 400,000 VND
        startDate: "2025-08-15",
        endDate: "2025-09-10",
    },
];
// User data ------------------------------------------
export const navbarUserLinks = [
    {
        label: "Home",
        path: "",
    },
    {
        label: "Shop",
        path: "shop",
    },
    {
        label: "Men",
        path: "shop/men",
    },
    {
        label: "Women",
        path: "shop/women",
    },
    {
        label: "About Us",
        path: "about",
    },
    {
        label: "Contact Us",
        path: "contact",
    },
    {
        label: "Blog",
        path: "blog",
    },
];
