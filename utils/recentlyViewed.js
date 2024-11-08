// Hàm để thêm sản phẩm vào danh sách đã xem gần đây
export const addToRecentlyViewed = (product) => {
    // Lấy danh sách hiện tại từ localStorage, hoặc tạo danh sách mới nếu chưa tồn tại
    let recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];

    // Kiểm tra nếu sản phẩm đã tồn tại, nếu có thì loại bỏ sản phẩm đó để tránh trùng lặp
    recentlyViewed = recentlyViewed.filter((item) => item.id !== product.id);

    // Thêm sản phẩm mới vào đầu danh sách
    recentlyViewed.unshift(product);

    // Giới hạn danh sách còn 10 sản phẩm gần nhất
    if (recentlyViewed.length > 10) {
        recentlyViewed.pop();
    }

    // Lưu danh sách cập nhật vào localStorage
    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
};

// Hàm để lấy danh sách sản phẩm đã xem gần đây từ localStorage
export const getRecentlyViewed = async () => {
    return (await JSON.parse(localStorage.getItem("recentlyViewed"))) || [];
};
