function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) {
      return res.sendStatus(401);
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.log("Error verifying token:", err.message);
        // Instead of just sending a status, you could also send a message or a specific error code
        return res.status(403).json({ message: 'Token is expired', code: 'TOKEN_EXPIRED' });
      }
      req.user = user;
      next();
    });
  }