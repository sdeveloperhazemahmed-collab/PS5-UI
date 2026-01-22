export default function SignForm({ isSignUpMode, setIsSignUpMode, password, setPassword, confirmPassword, setConfirmPassword, email, setEmail, username, setUsername, userImg, setCurrentUser, setLogIn, showPlayersBox, setShowPlayersBox, logIn, showNotificationBox, setShowNotificationBox, showUserInterestsBox, setShowUserInterestsBox, showPlay2Win, setShowPlay2Win }) {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (isSignUpMode) {
					if (password !== confirmPassword) return alert("Passwords do not match!");
					const users = JSON.parse(localStorage.getItem("users")) || [];
					if (users.some((u) => u.email === email))
						return alert("Email already registered!");
					const newUser = { username, email, password, image: userImg };
					users.push(newUser);
					localStorage.setItem("users", JSON.stringify(users));
					localStorage.setItem("currentUser", JSON.stringify(newUser));
					setCurrentUser(newUser);
					setLogIn(false);
					alert("Account created!");
				} else {
					const users = JSON.parse(localStorage.getItem("users")) || [];
					const foundUser = users.find(
						(u) => u.email === email && u.password === password
					);
					if (!foundUser) return alert("Invalid email or password!");
					localStorage.setItem("currentUser", JSON.stringify(foundUser));
					setCurrentUser(foundUser);
					setLogIn(false);
					alert(`Welcome back, ${foundUser.username}!`);
				}
			}}
			className="flex flex-col gap-3 w-[55%]"
		>
			{isSignUpMode && (
				<>
					<label className="text-white">Username:</label>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Username..."
						className="p-2 pl-3 w-full rounded border bg-black/30 outline-none"
						required
					/>
				</>
			)}

			<label className="text-white">Email:</label>
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="name@example.com"
				className="p-2 pl-3 rounded border bg-black/30 outline-none w-full"
				required
			/>
			<div className="flex justify-center items-center gap-8 w-[100%]">
				<span className="flex flex-col w-full">
					<label className="text-white">Password:</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password..."
						className="p-2 pl-3 rounded border bg-black/30 outline-none"
						required
					/>
				</span>

				{isSignUpMode && (
					<span className="flex flex-col">
						<label className="text-white">Confirm Password:</label>
						<input
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							placeholder="Confirm Password..."
							className="p-2 pl-3 rounded border bg-black/30 outline-none"
							required
						/>
					</span>
				)}
			</div>

			<button
				type="submit"
				className="mt-4 p-1 w-full transition-all duration-200 active:translate-y-[1px] active:bg-[#2424247c] bg-[#1a1a1a] hover:shadow-[0_0_7px_rgb(0,170,255)] hover:border-blue-500 border rounded-lg text-white"
			>
				{isSignUpMode ? "Sign Up" : "Sign In"}
			</button>

			<p
				className="transition-all duration-200 w-fit text-sm mt-3 self-center cursor-pointer hover:text-blue-400 text-white"
				onClick={() => {
					if (isSignUpMode) { setIsSignUpMode(false); return; }
					if (showUserInterestsBox) setShowUserInterestsBox(false);
					if (showNotificationBox) setShowNotificationBox(false);
					if (showPlayersBox) setShowPlayersBox(false);
					if (showPlay2Win) setShowPlay2Win(false);
					if (logIn) setLogIn(false);
					setIsSignUpMode(true);
				}}
			>
				{isSignUpMode
					? "Already have an account? Sign in"
					: "Don't have an account? Create one"}
			</p>
		</form>
	)
}