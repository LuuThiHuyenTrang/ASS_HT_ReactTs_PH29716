import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/Home";
import { useEffect, useState } from "react";
import DetailPage from "./pages/Detail";
import Dashboard from "./pages/Admin/Dashboard";
import Product from "./pages/Admin/Product/Products";
import AddProduct from "./pages/Admin/Product/AddProduct";
import UpdateProduct from "./pages/Admin/Product/UpdateProduct";
import AdminLayout from "./layouts/AdminLayout";
import WebsiteLayout from "./layouts/WebsiteLayout";
import { addPro, deletePro, editPro, getAllPro } from "./api/product";
import { IProduct } from "./interface/product";
import { addCate, deleteCate, editCate, getAllCate } from "./api/category";
import { ICategory } from "./interface/category";
import Category from "./pages/Admin/Category/Category";
import AddCategory from "./pages/Admin/Category/AddCategory";
import UpdateCategory from "./pages/Admin/Category/UpdateCategory";
import deleteAuth, { getAllUser, addUser, editUser } from "./api/auth";
import { IUser } from "./interface/auth";
import User from "./pages/Admin/Auth/User";
import AddUser from "./pages/Admin/Auth/AddUser";
import UpdateUser from "./pages/Admin/Auth/UpdateUser";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllPro().then(({ data }) => {
      setProducts(data);
    });
    getAllCate().then(({ data }) => {
      setCategories(data);
    });
    getAllUser().then(({ data }) => {
      setUsers(data);
    });
  }, []);
  //============================  Product=====================================
  const deletepro = async (id: number) => {
    const tb = confirm("Are you sure you want to delete");
    if (tb) {
      await deletePro(id);
      const deleteProduct = products.filter((pro: IProduct) => pro.id !== id);
      setProducts(deleteProduct);
    }
  };

  const addpro = async (product: IProduct) => {
    await addPro(product);
    alert("Add Product Success");
    getAllPro().then(({ data }) => setProducts(data));
    navigate("/admin/product");
  };

  const editpro = async (product: IProduct) => {
    await editPro(product);
    alert("Edit Product Success");
    getAllPro().then(({ data }) => setProducts(data));
    navigate("/admin/product");
  };

  //============================  CAtegory=====================================

  const deletecate = async (id: number) => {
    const tb = confirm("Are you sure you want to delete");
    if (tb) {
      await deleteCate(id);
      const deleteCategory = categories.filter(
        (pro: ICategory) => pro.id !== id
      );
      setCategories(deleteCategory);
    }
  };

  const addcate = async (category: ICategory) => {
    await addCate(category);
    alert("Add Category Success");
    getAllCate().then(({ data }) => setCategories(data));
    navigate("/admin/category");
  };

  const editcate = async (category: ICategory) => {
    await editCate(category);
    alert("Edit Category Success");
    getAllCate().then(({ data }) => setCategories(data));
    navigate("/admin/category");
  };
  //============================  User =====================================

  const deleteuser = async (id: number) => {
    const tb = confirm("Are you sure you want to delete");
    if (tb) {
      await deleteAuth(id);
      const deleteUser = users.filter((user: IUser) => user.id !== id);
      setUsers(deleteUser);
    }
  };

  const adduser = async (user: IUser) => {
    await addUser(user);
    alert("Add User Success");
    getAllUser().then(({ data }) => setUsers(data));
    navigate("/admin/auth");
  };

  const edituser = async (user: IUser) => {
    await editUser(user);
    alert("Edit User Success");
    getAllUser().then(({ data }) => setUsers(data));
    navigate("/admin/auth");
  };

  const signup = async (user: IUser) => {
    await addUser(user);
    alert("Sign up Success");
    navigate("/signin");
  };

  const signin = async (user: IUser) => {
    user.password = undefined;
    localStorage.setItem("user", JSON.stringify(user));
    alert("Sign in Success");
    navigate("/");
  };

  const logout = async () => {
    localStorage.removeItem("user");
    alert("Log out Success");
    navigate("/signin");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout logout={logout} />}>
          <Route index element={<HomePage products={products} />} />
          <Route path="detail/:id" element={<DetailPage />} />
          <Route path="signup" element={<SignUp signup={signup} />} />
          <Route
            path="signin"
            element={<SignIn users={users} signin={signin} />}
          />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/admin/product">
            <Route
              index
              element={<Product products={products} deletepro={deletepro} />}
            />
            <Route
              path="add"
              element={<AddProduct categories={categories} addpro={addpro} />}
            />
            <Route
              path="update/:id"
              element={
                <UpdateProduct categories={categories} editpro={editpro} />
              }
            />
          </Route>

          <Route path="/admin/category">
            <Route
              index
              element={
                <Category category={categories} deletecate={deletecate} />
              }
            />
            <Route
              path="add"
              element={
                <AddCategory categories={categories} addcate={addcate} />
              }
            />
            <Route
              path="update/:id"
              element={
                <UpdateCategory categories={categories} editcate={editcate} />
              }
            />
          </Route>

          <Route path="/admin/auth">
            <Route
              index
              element={<User users={users} deleteuser={deleteuser} />}
            />
            <Route path="add" element={<AddUser adduser={adduser} />} />
            <Route
              path="update/:id"
              element={<UpdateUser user={users} edituser={edituser} />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
