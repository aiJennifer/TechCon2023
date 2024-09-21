function validateForm() {
    // validates my contact form, more java used in contacts and registers html file
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    if (fullName === '' || email === '' || phone === '') {
        alert('Please fill in all fields.');
        return false;
    }

    return true;
}
