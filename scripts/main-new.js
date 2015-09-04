/**
 * Created by huan on 22/6/15.
 */
userShareBackgroundStatus=false;
userCommentBackgroundStatus=false;
userCommentOrderID='';
  function userLike (order_id,r) {
        var user_like_count = parseInt($(r).find("#user-like-count").text());
        user_like_count=user_like_count+1;
        $(r).find("#user-like-count").text(user_like_count);
        var postUrl = "/user/like/"+order_id;
        var jqxhr = $.ajax({
          method:"POST",
          url:postUrl
        })
              .done(function(data) {
                if(data=='1'){
                 //   alert('success');
                }else if(data=='2'){
                    alert('您已经赞过');
                    user_like_count=user_like_count-1;
                    $(r).find("#user-like-count").text(user_like_count);
                }else{
                    user_like_count=user_like_count-1;
                    $(r).find("#user-like-count").text(user_like_count);
                    alert('else');
                }
               
              })
              .fail(function(data) {
                alert( "网络错误" );
              })
 }

   function userShareNew (order_id) {
        var user_share_count = parseInt($("#user-share-count").text());
        user_share_count=user_share_count+1;
        $("#user-share-count").text(user_share_count);
        var postUrl = "/user/share/"+order_id;
        var jqxhr = $.ajax({
          method:"POST",
          url:postUrl
        })
          .done(function(data) {
                if(data=='1'){
                 //   alert('success');
                }
              })
          .fail(function(data) {
                alert( "网络错误" );
              })
 }

 function userShareBackgroundNew(){
  console.log('userShareBackground begin')
    if (userShareBackgroundStatus) {
        $("#share_bg").css("display","none");
        userShareBackgroundStatus = false;
    }else{
      $("#share_bg").css("display","block");
        userShareBackgroundStatus = true;
    }
    
 }
function userCommentNew (order_id) {
      userCommentOrderID=order_id;
      $("#comment-box-new").css("display","block");
      

 }

function userCommentSubmitNew () {
       var postUrl = "/user/comment_to_order/"+userCommentOrderID;
       var userform_textarea = $("#userform-textarea-new").val()
       var jsone_data = {}
       jsone_data.content=userform_textarea
        var jqxhr = $.ajax({
          method:"POST",
          url:postUrl,
          dataType:"json",
          data:JSON.stringify(jsone_data)
        })
          .done(function(data) {
                //alert(data);
                if(data=='1'){
                    userCommentBackgroundNew();
                  $("#userform-textarea-new").val('');
                 //   alert('success');
                 location.reload();
                }
              })
          .fail(function(data) {
                alert( "网络错误" );
         })

 }
 function userCommentBackgroundNew(){
    $("#comment-box-new").css("display","none");
 }
