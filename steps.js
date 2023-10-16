<script>
    $(document).ready(function () {
        $(".steps_item-button").click(function () {
            var data_id = $(this).attr('data-step');
            $(".steps_item-circle-active").removeClass("current");
            $(".steps_item-button").removeClass("current");
            $(".steps_item-content").removeClass("current");
            $("." + data_id).addClass("current");
        });
        $(".steps_item-circle").click(function () {
            var data_id = $(this).attr('data-step');
            $(".steps_item-circle-active").removeClass("current");
            $(".steps_item-button").removeClass("current");
            $(".steps_item-content").removeClass("current");
            $("." + data_id).addClass("current");
        });
    });
</script>
