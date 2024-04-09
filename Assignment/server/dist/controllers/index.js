const registerController = (req, res) => {
    console.log("Request Body is ", req.body);
    console.log("Hello Register");
    res.send("Hello");
};
export { registerController };
