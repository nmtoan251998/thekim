window.addEventListener("DOMContentLoaded", () => {
    const emailSubForm = document.querySelector('#email-sub-form');
    const emailSubButton = document.querySelector('#email-sub-btn');

    async function sendEmailToSlackWebHook(email) {
        const slackHookUrl = 'https://hooks.slack.com/services/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';

        const data = {
            text: `${email} has subscribed to The KIM`,
        }

        const response = await fetch(slackHookUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
            },
            mode: 'cors',
            body: JSON.stringify(data),
        });

        return response;
    }
    
    async function handleEmailSubmit(event) {
        event.preventDefault();
    
        const emailSubInput = document.querySelector('#email-sub-input');
        const emailSubVal = emailSubInput.value;
        const response = await sendEmailToSlackWebHook(emailSubVal);
        if (response.status === 200) {
            swal({
                title: "Thành công",
                text: "Bạn sẽ nhận được mail của The KIM mỗi khi có sản phẩm mới",
                icon: "success",
                button: {
                    visible: false,
                }
            });
        }
    }
    
    emailSubForm.addEventListener('submit', handleEmailSubmit);
});