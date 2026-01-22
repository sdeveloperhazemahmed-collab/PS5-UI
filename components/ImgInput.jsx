export default function ImgInput({ imgButtonRef, fileInputRef, userImg, setUserImg, username, email, password }) {
	return (
		<>
			<img
				ref={imgButtonRef}
				src={userImg || `Players/${10}.png`}
				alt="Upload"
				className="w-[25%] cursor-pointer border-2 border-blue-500 rounded-full hover:shadow-[0_0_15px_rgb(0,170,255)] transition-all  hover:border-blue-500"
				onClick={() => fileInputRef.current.click()}
			/>

			<input
				className="w-[25%]"
				ref={fileInputRef}
				type="file"
				accept="image/*"
				style={{ display: "none" }}
				onChange={(event) => {
					const file = event.target.files[0];
					if (file) {
						const reader = new FileReader();
						reader.onload = (e) => {
							const imgData = e.target.result;
							setUserImg(imgData);
							imgButtonRef.current.src = imgData;

							const savedUser = {
								username,
								email,
								password,
								image: imgData,
							};
							localStorage.setItem("user", JSON.stringify(savedUser));
						};
						reader.readAsDataURL(file);
					}
				}}
			/>
		</>
	);
}