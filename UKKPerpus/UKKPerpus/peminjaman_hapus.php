<?php
$id = $_GET['id'];
$query = mysqli_query($koneksi, "DELETE FROM peminjaman WHERE id_peminjaman=$id");

?>
<script>
    alert('Peminjaman Berhasil Dihapus');
    location.href = "index.php?page=peminjaman"
</script>