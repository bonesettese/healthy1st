HealthyFirst là ứng dụng web được phát triển nhằm hỗ trợ các chi cục an toàn vệ sinh thực phẩm trong công tác quản lý các cơ sở sản xuất thực phẩm hoặc kinh doanh dịch vụ ăn uống. Hệ thống cung cấp các chức năng chính như sau: 


- - - Quản lý các cơ sở sản xuất thực phẩm và/hoặc kinh doanh dịch vụ ăn uống (gọi tắt là cơ sở). Mỗi cơ sở có các thông tin cơ bản bao gồm tên cơ sở, địa chỉ, xã/phường/thị trấn, quận/huyện, số điện thoại, các loại hình kinh doanh (sản xuất thực phẩm và/hoặc dịch vụ ăn uống), số cấp Giấy chứng nhận cơ sở đủ điều kiện an toàn thực phẩm.

    facility:       cơ sở
    facilityName:   tên
    address:        địa chỉ
    ward:           xã/phường/thị trấn
    district:       quận/huyện
    phoneNumber:    số điện thoại
    businessType:   các loại hình kinh doanh
    certifyNumber:  số chứng nhận


- - - Quản lý Giấy chứng nhận cơ sở đủ điều kiện an toàn thực phẩm

    a. Cấp mới, thu hồi, ra hạn (cấp lại) giấy chứng nhận cho các cơ sở. In và quản lý giấy chứng nhận khi cấp mới/lại. In và quản lý quyết định thu hồi giấy chứng nhận. Thống kê số lượng giấy chứng nhận cấp theo thời gian là loại hình cơ sở (sản xuất thực phẩm hay dịch vụ ăn uống).

    b. Lọc danh sách các cơ sở đủ điều kiện an toàn thực phẩm (có giấy chứng nhận đang còn hiệu lực. Thời gian hiệu lực của giấy chứng nhận là từ ngày cấp và trước ngày hết hạn hoặc bị thu hồi).

    c. Lọc danh sách các cơ sở không đủ điểu kiện an toàn thực phẩm (không có giấy chứng nhận đang còn hiệu lực), lọc chi tiết hơn danh sách cơ sở chưa được cấp, đã hết hạn, bị thu hồi giấy chứng nhận.

    certification:  giấy chứng nhận
    status:         tình trạng (licensed, unlicensed, expired, revoked)
    licensedDate:   ngày cấp giấy
    expiredDate:    ngày hết hạn


- - - Quản lý hoạt thông thanh, kiểm tra điều kiện an toàn thực phẩm của các cơ sở

    a. Lập kế hoạch thanh, kiểm tra các cơ sở về điều kiện an toàn thực phẩm.

    b. Theo dõi thực hiện kế hoạch thanh, kiểm tra.

    c. Thống kê kết quả thực hiện thanh, kiểm tra.

    d. Tự động gợi ý những cơ sở cần thanh, kiểm tra tiếp theo.

    e. Quản lý các mẫu thực phẩm cần/được giám định

    Kế hoạch thanh, kiểm tra là danh sách các hoạt động thanh, kiểm tra được sắp xếp theo trình tự thời gian. Một hoạt động thanh, kiểm tra sẽ thực hiện thanh, kiểm tra một cơ sở ở một thời gian cụ thể (từ ngày đến ngày). Hoạt động thanh kiểm tra bao gồm các bước (1) kiểm tra tại cơ sở, (2) lấy mẫu thực phẩm và gửi/thực hiện kiểm định (nếu cần), (3) kết luận về kết quả thanh kiểm tra, (4) quyết định xử lý vi phạm (nếu có). Kết quả thanh, kiểm tra cho biết cơ sở đủ hay không đủ điều kiện an toàn vệ sinh thực phẩm. Nếu quá trình thanh, kiểm tra có/cần lấy mẫu thực phẩm để giám định thì cần quản lý cả trạng thái thực hiện giám định (đánh mã các mẫu, đơn vị giám định, đã gửi giám định hay chưa, ngày nhận kết quả giám định, kết quả giám định từng mẫu).


- - - Phân quyền

    a. Hệ thống cho phép quản lý người dùng, người dùng có vai trò là quản lý hoặc chuyên viên.

    b. Người quản lý được thực hiện tất cả chức năng và truy cập tất cả dữ liệu. Người quản lý phân công địa bàn (huyện/quận) phụ trách cho các chuyên viên.

    c. Chuyên viên phụ trách địa bàn nào thì chỉ làm việc trên dữ liệu các cơ sở thuộc địa bàn đó.

    user:           người dùng
    manager:        quản lý
    specialist:     chuyên viên