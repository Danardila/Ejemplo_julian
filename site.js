$(function() {
    var $all = $('input:checkbox[name=slectAll]').change(function() {
        $checks.prop("checked", this.checked);
        $none.prop('checked', false);
      });

    var $checks = $('#estudios :checkbox').change(function() {
      $all.prop("checked", $checks.not(':checked').length == 0);
      $none.prop('checked', false);
    });
  
    var $none = $('input:checkbox[name=No_estudio]').change(function() {
      if (this.checked) {
        $checks.add($all).prop("checked", false);
      }
    });
  
  });