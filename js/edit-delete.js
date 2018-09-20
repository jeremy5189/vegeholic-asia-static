$(function() {
    $('.edit-recipe').click(function() {
        var id = $(this).data('id');
        location.href = '/edit/' + id;
    });

    $('.delete-recipe').click(function() {
        var id = $(this).data('id');
        swal({
            title: "刪除食譜",
            text: "確定要刪除這個食譜嗎？這個動作無法復原",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "是，我要刪除",
            cancelButtonText: "不，不要刪除",
            closeOnConfirm: false,
            closeOnCancel: true
        },
        function(isConfirm) {
            if (isConfirm) {
                $.ajax({
                    url: '/recipe/' + id,
                    type: 'DELETE',
                    data: {
                        _token: window.Laravel.csrfToken
                    },
                    success: function(resp) {
                        if(resp) {

                            swal({
                                title: "已刪除",
                                text: "您的食譜已經刪除",
                                type: "success"
                            }, function() {
                                location.reload();
                            });
                            
                        } else {
                            swal("刪除失敗", "請再試一次", "error");
                        }
                    },
                    error: function(resp) {
                        swal("刪除失敗", "請再試一次", "error");
                    }
                });
                
            }
        });
    });
}); 