const express = require("express");
const { getAllPubs, createPub, updatePub, deletePub, getPubDetails } = require("../controllers/publicationController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router=express.Router();

router.route("/pubs").get(getAllPubs);
router.route("/pub/new").post(isAuthenticatedUser,authorizeRoles("admin"),createPub);
router
.route("/pub/:id")
.put(isAuthenticatedUser,authorizeRoles("admin"), updatePub)
.delete(isAuthenticatedUser,authorizeRoles("admin"), deletePub)
.get(getPubDetails);
module.exports=router

