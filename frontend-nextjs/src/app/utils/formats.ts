const format = {
    formatToVietnameseDate(dateString: string) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    formatReadTime(readTime: number) {
        if (readTime <= 0) {
            return "Không rõ thời gian đọc";
        } else if (readTime < 1) {
            return "Dưới 1 phút đọc";
        }
        return `${readTime} phút đọc`;
    },
    formatViews(views: number) {
        if (views < 1000) {
            return `${views} lượt xem`;
        }
        const formattedViews = (views / 1000).toFixed(1);
        return `${formattedViews}N lượt xem`;
    },
    convertStringToSlug(str: string) {
        return String(str)
            .normalize("NFKD")
            .replace(/đ|Đ/g, "d")
            .replace(/[\u0300-\u036f]/g, "")
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    },
};

export default Object.freeze(format);
