$(document).ready(function() {
    $('[data-bs-toggle="tooltip"]').tooltip();
    
    $('.needs-validation').on('submit', function(e) {
        if (!this.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        $(this).addClass('was-validated');
    });
    
    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true
    });
    
    $('#status-filter').change(function() {
        const status = $(this).val();
        if (status === 'all') {
            $('.policy-row').show();
        } else {
            $('.policy-row').hide();
            $(`.policy-row[data-status="${status}"]`).show();
        }
    });
    
    $('.delete-btn').click(function() {
        return confirm('Are you sure you want to delete this item?');
    });
});