import React, { useState, useEffect } from "react";
import IconSearch from "../../assets/icon/search";
import IconDelete from "../../assets/icon/delete";
import IconEdit from "../../assets/icon/edit";
import ImgCategory from "../../assets/img/empty_Category.png";
import ImgBook from "../../assets/img/img_book.png";
import { useForm } from "react-hook-form";
import ImgProduct1 from "../../assets/img/listproduct/img1.png";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "../../features/category/actions";
import {
  createImageProduct,
  createProduct,
  fetchAllProduct,
  getSingleProduct,
  removeProduct,
  searchByKeyword,
  updateProduct,
} from "../../features/manageProduct/actions";
import { CLEAR_STATUS } from "../../features/manageProduct/constants";
import moment from "moment";
import { config } from "../../config";
import NotifSukses from "../../components/notifSukses";
import NotifDelete from "../../components/notifDelete";
export default function ManagementProduct() {
  const [notif, setNotif] = useState({
    sukses: false,
    delete: false,
  });
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const manageProduct = useSelector((state) => state.manageProduct);
  // console.log("categories", categories);
  console.log("manageProduct", manageProduct);
  const [statusUpdate, setStatusUpdate] = useState(false);
  const [productData, setProductData] = useState({
    name: "",
    id: "",
  });
  const [keyword, setKeyword] = useState("");
  const searchByKey = (value) => {
    setKeyword(value);
    dispatch(searchByKeyword(value));
  };
  const [imageFile, setImageFile] = useState("");
  console.log("imageFile", imageFile);
  const [form, setForm] = useState({
    title: "",
    auhtor: "",
    cover: "",
    published: "",
    price: "",
    stock: "",
    category: "",
  });

  console.log("form", form);
  // console.log("imageFile", imageFile);
  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    if (statusUpdate) {
      dispatch(updateProduct(form, manageProduct.dataSingle.id));
    } else {
      dispatch(createProduct(form));
    }

    reset();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    clearErrors(name);

    if (name === "cover") {
      let reader = new FileReader();
      let file = e.target.files[0];
      const fileSize = file.size / 1024; // in MiB
      if (fileSize > 1000) {
        alert("File size exceeds 1 MiB");
      } else {
        reader.onloadend = () => {
          setImageFile(reader.result);
        };
        reader.readAsDataURL(file);
      }

      let formData = new FormData();
      formData.append("image", file);

      dispatch(createImageProduct(formData));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleDelete = (title, id) => {
    setProductData({ ...productData, name: title, id: id });
    setNotif({ ...notif, delete: true });
  };

  const handleDeleteApi = () => {
    dispatch(removeProduct(productData.id));
    setNotif({ ...notif, delete: false });
  };

  const handleEdit = (id) => {
    dispatch(getSingleProduct(id));
    setStatusUpdate(true);
  };

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchAllProduct());
  }, [dispatch, manageProduct.keyword]);

  useEffect(() => {
    if (manageProduct.statusPostImg === "success") {
      setForm({ ...form, cover: manageProduct.dataPostImgProduct.image.src });
      dispatch({
        type: CLEAR_STATUS,
      });
    }
    if (manageProduct.statusPostProduct === "success") {
      dispatch(fetchAllProduct());
      setNotif({ ...notif, sukses: true });
      setTimeout(() => {
        setNotif({ ...notif, sukses: false });
        dispatch({
          type: CLEAR_STATUS,
        });
      }, 5000);
      setForm({
        title: "",
        auhtor: "",
        cover: "",
        published: "",
        price: "",
        stock: "",
        category: "",
      });
      setImageFile("");
      reset();
    }
    if (manageProduct.statusDeleteProduct === "success") {
      dispatch(fetchAllProduct());
    }
    if (manageProduct.statusGetSingle === "success") {
      setForm({
        title: manageProduct.dataSingle.title,
        auhtor: manageProduct.dataSingle.auhtor,
        cover: manageProduct.dataSingle.cover,
        published: manageProduct.dataSingle.published,
        price: manageProduct.dataSingle.price,
        stock: manageProduct.dataSingle.stock,
        category: manageProduct.dataSingle.category,
      });
      setImageFile(manageProduct.dataSingle.cover);
      dispatch({
        type: CLEAR_STATUS,
      });
    }
    if (manageProduct.statusUpdate === "success") {
      dispatch(fetchAllProduct());
      setForm({
        title: "",
        auhtor: "",
        cover: "",
        published: "",
        price: "",
        stock: "",
        category: "",
      });
      setStatusUpdate(false);
      setImageFile("");
      dispatch({
        type: CLEAR_STATUS,
      });
    }
  }, [
    manageProduct.statusPostImg,
    manageProduct.statusPostProduct,
    manageProduct.statusDeleteProduct,
    manageProduct.statusGetSingle,
    manageProduct.statusUpdate,
  ]);
  return (
    <div>
      <NotifSukses
        name={manageProduct?.dataPostProduct?.data?.title}
        show={notif.sukses}
        text="book"
      />
      <NotifDelete
        text="buku"
        name={productData.name}
        show={notif.delete}
        closeClick={() => setNotif({ ...form, delete: false })}
        onClick={() => handleDeleteApi()}
      />
      <div className="ml-32 grid grid-cols-5">
        <div className="col-span-5 2xl:col-span-3">
          <div className="h-full 2xl:h-screen pt-9 overflow-scroll">
            <h2 className="text-xl">Book Managment</h2>

            <div className="px-4">
              <div className="relative mt-12">
                <input
                  type="text"
                  name="search"
                  placeholder="Search.."
                  value={keyword}
                  onChange={(e) => searchByKey(e.target.value)}
                  className="py-4 px-6 text-base rounded-lg shadow-1xl focus:outline-none w-full"
                />
                <IconSearch className="absolute right-4 top-1/2 transform -translate-y-1/2" />
              </div>

              <ul className="mt-8">
                {manageProduct.status === "idle" ? (
                  "idle"
                ) : manageProduct.status === "process" ? (
                  "process"
                ) : manageProduct.status === "success" &&
                  !manageProduct.data.length ? (
                  /* ketika data product buku kosong */
                  <div>
                    <div className="flex flex-col items-center justify-center h-full 2xl:h-80vh">
                      <img src={ImgCategory} alt="category-empty" />
                      <p className="font-medium text-xl mt-2 text-violet-purple">
                        Book is Empty!
                      </p>
                    </div>
                  </div>
                ) : /* ketika product buku terisi */
                manageProduct.status === "success" ? (
                  manageProduct.data.map((items, index) => {
                    return (
                      <li
                        key={index}
                        className={`${index === 0 ? "" : "mt-8"}`}
                      >
                        <div className="shadow-1xl flex items-center p-4 rounded-lg relative">
                          {/* img box */}
                          <div className="min-w-110px w-110px h-110px rounded-xl overflow-hidden mr-8">
                            <img
                              className="h-full w-full"
                              src={`${config.api_image}${items.cover}`}
                              alt="img-card"
                            />
                          </div>
                          {/* text */}
                          <div>
                            <p className="text-base font-bold">{items.title}</p>
                            <div className="flex items-center mt-1">
                              <p className="font-medium text-xs text-green-mantis mr-2">
                                Published at
                              </p>
                              <p className="bg-green-mantis px-2 py-1 rounded-lg text-white font-medium text-xs">
                                {moment(items.published).format("DD/MM/YYYY")}
                              </p>
                            </div>
                            <p className="font-medium text-xs text-gray-400 mt-4">
                              Author : {items.auhtor}
                            </p>
                            <p className="font-medium text-base mt-1">
                              ${items.price}
                            </p>
                          </div>
                          {/* icon delete */}
                          <IconDelete
                            onClick={() => handleDelete(items.title, items.id)}
                            className="cursor-pointer absolute right-10 top-10"
                            stroke="#FF0000"
                          />
                          <IconEdit
                            onClick={() => handleEdit(items.id)}
                            className="cursor-pointer absolute right-10 bottom-10"
                          />
                        </div>
                      </li>
                    );
                  })
                ) : (
                  "error fetching"
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-5 2xl:col-span-2">
          <div className="h-full 2xl:h-screen pt-9 xl:overflow-scroll mx-7 relative">
            <h2 className="font-bold">
              Codeathome <span className="font-normal">BookStore</span>
            </h2>
            {/* start ketika data kosong */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={`flex h-full 2xl:h-78vh overflow-scroll mt-10`}>
                {/* <div
              className={`flex items-center justify-center border h-69vh overflow-scroll mt-10`}
            > */}
                {/* img empty cart */}
                {/* <img src={ImgEmptyCart} alt="img-empty-cart" /> */}
                <ul className="w-full px-5">
                  <li className="mt-5">
                    <div className="shadow-1xl p-4 rounded-xl flex flex-col items-center relative justify-center cursor-pointer">
                      <input
                        // {...register("cover", {
                        //   required: "cover image tidak boleh kosong",
                        // })}
                        onChange={handleChange}
                        name="cover"
                        // value={form?.cover}
                        type="file"
                        className="absolute w-full h-full cursor-pointer opacity-0"
                        accept="image/*"
                      />

                      {/* ketika data image kosong / default */}
                      {!imageFile ? (
                        <div>
                          <img src={ImgBook} alt="img-book" />
                          <p className="text-gray-culture text-xl mt-4 text-center">
                            Click tio select image
                          </p>
                          <p className="text-gray-culture text-xl text-center">
                            545 x 361 pixels
                          </p>
                        </div>
                      ) : (
                        /* ketika data telah di dari local */
                        <div
                          className="overflow-hidden border"
                          style={{ width: "273px", height: "361px" }}
                        >
                          {/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(
                            imageFile
                          ) ? (
                            <img
                              className="w-full h-full"
                              src={config.api_image + form.cover}
                              alt="img-data"
                            />
                          ) : (
                            <img
                              className="w-full h-full"
                              src={imageFile}
                              alt="img-data"
                            />
                          )}
                        </div>
                      )}
                    </div>
                    {/* {errors.cover && (
                      <p className="mt-2 text-red-dragon">
                        {errors.cover.message}
                      </p>
                    )} */}
                  </li>
                  <li className="mt-5">
                    <input
                      {...register("title", {
                        required: "title tidak boleh kosong",
                      })}
                      onChange={handleChange}
                      name="title"
                      value={form.title}
                      type="text"
                      placeholder="Book title"
                      className="py-4 px-6 text-base rounded-lg shadow-1xl focus:outline-none w-full"
                    />
                    {errors.title && (
                      <p className="mt-2 text-red-dragon">
                        {errors.title.message}
                      </p>
                    )}
                  </li>
                  <li className="mt-5">
                    <input
                      {...register("auhtor", {
                        required: "auhtor tidak boleh kosong",
                      })}
                      onChange={handleChange}
                      name="auhtor"
                      value={form.auhtor}
                      type="text"
                      placeholder="Book author/publisher"
                      className="py-4 px-6 text-base rounded-lg shadow-1xl focus:outline-none w-full"
                    />
                    {errors.auhtor && (
                      <p className="mt-2 text-red-dragon">
                        {errors.auhtor.message}
                      </p>
                    )}
                  </li>
                  <li className="mt-5">
                    <select
                      className="py-4 px-6 text-base rounded-lg shadow-1xl focus:outline-none w-full"
                      {...register("category", {
                        required: "category tidak boleh kosong",
                      })}
                      onChange={handleChange}
                      name="category"
                      value={form.category}
                    >
                      <option value="">Select Category</option>
                      {categories?.data?.map((items, index) => {
                        return (
                          <option key={index} value={items.id}>
                            {items.name}
                          </option>
                        );
                      })}
                    </select>
                    {errors.category && (
                      <p className="mt-2 text-red-dragon">
                        {errors.category.message}
                      </p>
                    )}
                  </li>
                  <li className="mt-5">
                    <input
                      {...register("published", {
                        required: "published tidak boleh kosong",
                      })}
                      onChange={handleChange}
                      name="published"
                      value={moment(form.published).format("YYYY-MM-DD")}
                      type="date"
                      placeholder="Book author/publisher"
                      className="py-4 px-6 text-base rounded-lg shadow-1xl focus:outline-none w-full"
                    />
                    {errors.published && (
                      <p className="mt-2 text-red-dragon">
                        {errors.published.message}
                      </p>
                    )}
                  </li>
                  <li className="mt-5">
                    <input
                      {...register("price", {
                        required: "price tidak boleh kosong",
                      })}
                      onChange={handleChange}
                      name="price"
                      value={form.price}
                      type="number"
                      placeholder="Price"
                      className="py-4 px-6 text-base rounded-lg shadow-1xl focus:outline-none w-full"
                    />
                    {errors.price && (
                      <p className="mt-2 text-red-dragon">
                        {errors.price.message}
                      </p>
                    )}
                  </li>
                  <li className="mt-5">
                    <input
                      {...register("stock", {
                        required: "stock tidak boleh kosong",
                      })}
                      onChange={handleChange}
                      name="stock"
                      value={form.stock}
                      type="number"
                      placeholder="Available stock"
                      className="py-4 px-6 text-base rounded-lg shadow-1xl focus:outline-none w-full"
                    />
                    {errors.stock && (
                      <p className="mt-2 text-red-dragon">
                        {errors.stock.message}
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
                    Object.values(form).every((value) => value !== "")
                      ? "bg-violet-purple"
                      : "bg-soft-purple"
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
