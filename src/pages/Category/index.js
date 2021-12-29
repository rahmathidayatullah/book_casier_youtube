import React, { useState, useEffect } from "react";
import IconSearch from "../../assets/icon/search";
import IconDelete from "../../assets/icon/delete";
import IconEdit from "../../assets/icon/edit";
import ImgCategory from "../../assets/img/empty_Category.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategory,
  fetchCategory,
  getSingleCategory,
  removeCategory,
  updateCategory,
} from "../../features/category/actions";
import NotifSukses from "../../components/notifSukses";
import NotifDelete from "../../components/notifDelete";
import { CLEAR_STATUS } from "../../features/category/constants";
export default function Category() {
  const [notif, setNotif] = useState({
    sukses: false,
    delete: false,
  });
  const [categoryData, setCategoryData] = useState({
    name: "",
    id: "",
  });
  const [statusUpdate, setStatusUpdate] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [form, setForm] = useState({
    name: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    clearErrors(name);
    setForm({ ...form, [name]: value });
  };

  const handleDelete = (name, id) => {
    setCategoryData({ ...categoryData, name: name, id: id });
    setNotif({ ...notif, delete: true });
  };

  const handleDeleteApi = () => {
    dispatch(removeCategory(categoryData.id));
    setNotif({ ...notif, delete: false });
  };

  const handleEdit = (id) => {
    setStatusUpdate(true);
    dispatch(getSingleCategory(id));
  };

  const onSubmit = () => {
    if (statusUpdate) {
      dispatch(updateCategory(categories.dataSingle.id, form));
      dispatch({
        type: CLEAR_STATUS,
      });
    } else {
      dispatch(createCategory(form));
      setForm({ ...form, name: "" });
    }
    reset();
  };

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  useEffect(() => {
    if (categories.statusPost === "success") {
      dispatch(fetchCategory());
      setNotif({ ...notif, sukses: true });
      setTimeout(() => {
        setNotif({ ...notif, sukses: false });
        dispatch({
          type: CLEAR_STATUS,
        });
      }, 5000);
    }
    if (categories.statusDelete === "success") {
      dispatch(fetchCategory());
    }
    if (categories.statusUpdate === "success") {
      dispatch(fetchCategory());
      setForm({ ...form, name: "" });
      setStatusUpdate(false);
      dispatch({
        type: CLEAR_STATUS,
      });
    }
    if (categories.statusGetSingle === "success") {
      setForm({ ...form, name: categories.dataSingle.name });
    }
  }, [
    categories.statusPost,
    categories.statusDelete,
    categories.statusGetSingle,
    categories.statusUpdate,
  ]);
  return (
    <div>
      <NotifSukses name={categories?.dataPost?.name} show={notif.sukses} />
      <NotifDelete
        name={categoryData.name}
        show={notif.delete}
        closeClick={() => setNotif({ ...form, delete: false })}
        onClick={() => handleDeleteApi()}
      />
      <div className="ml-32 grid grid-cols-5">
        <div className="col-span-5 2xl:col-span-3">
          <div className="h-full 2xl:h-screen pt-9 overflow-scroll px-3">
            <h2 className="text-xl">Category Managment</h2>
            {/* ketika data category kosong */}
            {/* <div>
              
              <div className="flex flex-col items-center justify-center h-full 2xl:h-80vh">
                <img src={ImgCategory} alt="category-empty" />
                <p className="font-medium text-xl mt-2 text-violet-purple">
                  Category is Empty!
                </p>
              </div>
            </div> */}

            {/* ketika category terisi */}
            <div>
              {/* search */}
              <div className="relative mt-12">
                <input
                  type="text"
                  name="search"
                  placeholder="Search.."
                  className="py-4 px-6 text-base rounded-lg shadow-1xl focus:outline-none w-full"
                />
                <IconSearch className="absolute right-4 top-1/2 transform -translate-y-1/2" />
              </div>
              {/* list category */}
              <ul className="mt-8">
                {categories.status === "idle"
                  ? "idle"
                  : categories.status === "process"
                  ? "process"
                  : categories.status === "success"
                  ? categories.data.map((items, index) => {
                      return (
                        <li
                          key={index}
                          className={`${index === 0 ? "" : "mt-4"}`}
                        >
                          <div className="shadow-1xl flex items-center justify-between py-4 px-6 rounded-lg">
                            <p className="font-base">{items.name}</p>
                            <div className="flex items-center">
                              <IconDelete
                                className="cursor-pointer mr-7"
                                stroke="#FF0000"
                                onClick={() =>
                                  handleDelete(items.name, items.id)
                                }
                              />
                              <IconEdit
                                onClick={() => handleEdit(items.id)}
                                className="cursor-pointer"
                              />
                              {/* icon */}
                            </div>
                          </div>
                        </li>
                      );
                    })
                  : "error"}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-5 2xl:col-span-2">
          <div className="h-full 2xl:h-screen pt-9 xl:overflow-scroll mx-7 relative">
            <h2 className="font-bold">
              Codeathome <span className="font-normal">BookStore</span>
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* start ketika data kosong */}
              <div className={`flex h-full 2xl:h-69vh overflow-scroll mt-10`}>
                {/* <div
              className={`flex items-center justify-center border h-69vh overflow-scroll mt-10`}
            > */}
                {/* img empty cart */}
                {/* <img src={ImgEmptyCart} alt="img-empty-cart" /> */}
                <ul className="w-full px-3">
                  <li className="mt-5">
                    <input
                      {...register("name", {
                        required: "category tidak boleh kosong",
                      })}
                      onChange={handleChange}
                      type="text"
                      name="name"
                      value={form.name}
                      placeholder="Category name"
                      className="py-4 px-6 text-base rounded-lg shadow-1xl focus:outline-none w-full"
                    />
                    {errors.name && (
                      <p className="mt-2 text-red-dragon">
                        {errors.name.message}
                      </p>
                    )}
                  </li>
                </ul>
              </div>
              {/* end ketika data kosong */}

              {/* btn action */}

              <div className="static 2xl:absolute bottom-0 w-full">
                <button
                  type="submit"
                  className={`flex items-center justify-center mt-4 bg-soft-purple p-5 text-white w-full rounded-xl ${
                    !form.name
                      ? "bg-soft-purple cursor-not-allowed"
                      : "bg-violet-purple"
                  }`}
                >
                  <p className="font-bold">Submit</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
