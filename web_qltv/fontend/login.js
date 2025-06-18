// login.js

document.addEventListener('DOMContentLoaded', () => {
    const authButton = document.getElementById('authButton');
    let authModal; // Biến để giữ tham chiếu đến modal sau khi tải

    // Hàm hiển thị thông báo
    function showMessage(elementId, message, type = 'success', duration = 2000) {
        const messageElement = document.getElementById(elementId);
        if (messageElement) {
            messageElement.textContent = message;
            messageElement.className = 'message-area ' + type; // Đặt lại các lớp và thêm loại mới
            messageElement.style.display = 'block'; // Hiển thị thông báo

            // Tự động ẩn thông báo sau một khoảng thời gian
            setTimeout(() => {
                messageElement.style.display = 'none';
                messageElement.textContent = '';
                messageElement.className = 'message-area'; // Đặt lại class
            }, duration);
        }
    }

    // Hàm tải và chèn modal vào DOM
    async function loadLoginModal() {
        if (authModal) { // Nếu modal đã được tải, chỉ cần reset form và hiển thị
            authModal.style.display = 'flex';
            document.getElementById('loginForm').classList.add('active');
            document.getElementById('registerForm').classList.remove('active');
            // Ẩn các thông báo cũ khi mở lại modal
            document.getElementById('loginMessage').style.display = 'none';
            document.getElementById('registerMessage').style.display = 'none';
            return;
        }

        try {
            const response = await fetch('login.html'); 
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const modalHtml = await response.text();
            document.body.insertAdjacentHTML('beforeend', modalHtml);

            authModal = document.getElementById('authModal');
            const closeButton = authModal.querySelector('.close-button');
            const loginForm = document.getElementById('loginForm');
            const registerForm = document.getElementById('registerForm');
            const showRegisterLink = document.getElementById('showRegister');
            const showLoginLink = document.getElementById('showLogin');
            
            // Lấy tham chiếu đến các khu vực thông báo
            const loginMessageArea = document.getElementById('loginMessage');
            const registerMessageArea = document.getElementById('registerMessage');


            closeButton.addEventListener('click', () => {
                authModal.style.display = 'none';
                // Ẩn thông báo khi đóng modal
                loginMessageArea.style.display = 'none';
                registerMessageArea.style.display = 'none';
            });

            window.addEventListener('click', (e) => {
                if (e.target === authModal) {
                    authModal.style.display = 'none';
                    // Ẩn thông báo khi đóng modal
                    loginMessageArea.style.display = 'none';
                    registerMessageArea.style.display = 'none';
                }
            });

            showRegisterLink.addEventListener('click', (e) => {
                e.preventDefault();
                loginForm.classList.remove('active');
                registerForm.classList.add('active');
                // Ẩn thông báo khi chuyển đổi form
                loginMessageArea.style.display = 'none';
                registerMessageArea.style.display = 'none';
            });

            showLoginLink.addEventListener('click', (e) => {
                e.preventDefault();
                registerForm.classList.remove('active');
                loginForm.classList.add('active');
                // Ẩn thông báo khi chuyển đổi form
                loginMessageArea.style.display = 'none';
                registerMessageArea.style.display = 'none';
            });

            // Xử lý submit form Đăng Nhập
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const username = loginForm.elements.username.value;
                const password = loginForm.elements.password.value;
                console.log('Đăng nhập với:', { username, password });

                //đăng nhập thành công
                showMessage('loginMessage', 'Đăng nhập thành công!', 'success', 2000); // Hiển thị thông báo 2 giây

                // đợi tbao rồi chuyển hướng
                setTimeout(() => {
                    authModal.style.display = 'none'; // Đóng modal
                    window.location.href = 'muonsach.html'; // Chuyển hướng về trang chủ mượn sách
                }, 2000); // Thời gian chờ = thời gian hiển thị thông báo(2 giây)
            });

            // Xử lý submit form Đăng Ký
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const username = registerForm.elements.username.value;
                const email = registerForm.elements.email.value;
                const password = registerForm.elements.password.value;
                const confirmPassword = registerForm.elements.confirmPassword.value;

                if (password !== confirmPassword) {
                    showMessage('registerMessage', 'Mật khẩu và xác nhận mật khẩu không khớp!', 'error', 3000);
                    return;
                }
                console.log('Đăng ký với:', { username, email, password });
                
                // đăng kí thành công
                showMessage('registerMessage', 'Đăng ký thành công!', 'success', 2000);

                // Đợi một chút rồi đóng modal
                setTimeout(() => {
                    authModal.style.display = 'none';
                    window.location.href = 'index.html'; // Chuyển hướng về index
                }, 2000);
            });

        } catch (error) {
            console.error('Lỗi khi tải modal đăng nhập/đăng ký:', error);
            alert('Không thể tải form đăng nhập/đăng ký. Vui lòng thử lại sau.');
        }
    }

    // Mở modal và tải nội dung khi click vào nút "Đăng Nhập/Đăng Kí"
    authButton.addEventListener('click', async (e) => {
        e.preventDefault();
        await loadLoginModal();
        // Các logic hiển thị form ban đầu đã được chuyển vào loadLoginModal()
        // để đảm bảo modal được hiển thị và form active đúng sau khi tải lần đầu.
    });
});