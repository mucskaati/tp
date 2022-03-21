window.customDatatable = (tableId, dateColumnNum, order, pageLength) => {
	let latinized;

	$(`#${tableId} thead tr`).clone(true).appendTo(`#${tableId} thead`);
        $(`#${tableId} thead tr:eq(1) th`).each(function (i) {
            var title = $(this).text();
            $(this).html('<input type="text" class="form-control" style="width: 100%;">');
     
            $('input', this).on('keyup change', function () {
            	latinized = latinize(this.value)
                if (allRepsTable.column(i).search() !== latinized) {
                    allRepsTable
                        .column(i)
                        .search(latinized)
                        .draw();
                }
            });
        });

    let columnDefs = []
    if (!((dateColumnNum === undefined) || dateColumnNum === null)) {
    	columnDefs.push({"width": "75px", "targets": dateColumnNum})
    }

    let allRepsTable = $(`#${tableId}`).DataTable({
        "pageLength": pageLength ? pageLength : 50,
        "order": [order],
        "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
        // "columnDefs": columnDefs,
        // fixedHeader: true,
        orderCellsTop: true,
    });
}