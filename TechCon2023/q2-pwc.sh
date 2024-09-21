VALID_PASSWORD="GermanyIsTheBest123"

read -p "Enter the password: " entered_password

if [ "$entered_password" == "$VALID_PASSWORD" ]; then
    echo "Access Granted"
else
    echo "Access Denied"
fi
