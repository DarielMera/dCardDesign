// bring in the elements i need
const idEle = document.getElementById("emplId")
const fNameEle = document.getElementById("fName")
const lNameEle = document.getElementById("lName")
const descriptionEle = document.getElementById("description")
const avatarEle = document.getElementById("avatar")
const emailEle = document.getElementById("email")
const buttonPrevEle = document.getElementById("btnPrev")
const buttonNextEle = document.getElementById("btnNext")
let id = 1
// async await for my ajax request - fetch - inside a fucntion
// keep in mind the promises thats needs to be fulfill
// create function

async function fetchData(id) {
	const fetchApi = await fetch(`https://reqres.in/api/users/${id}`)
	const res = await fetchApi.json()
	console.log(res)
	// const id = res.data.id
	const fName = res.data.first_name
	const lName = res.data.last_name
	const description = res.support.text
	const avatar = res.data.avatar
	const email = res.data.email
	displayInfo(id, fName, lName, avatar, description, email)
}

fetchData(id)

// display the info functtion

function displayInfo(id, fName, lName, avatar, description, email) {
	idEle.innerHTML = id
	fNameEle.innerHTML = fName
	lNameEle.innerHTML = lName
	descriptionEle.innerHTML = description
	avatarEle.src = avatar
	emailEle.innerHTML = email

	console.log(id, fName, lName, avatar, description, email)
}

// add button to call function
// display next on button
//dpending on present parameter add 1 to the parameter

buttonPrevEle.addEventListener("click", prevCardInfo)
buttonNextEle.addEventListener("click", nextCardInfo)

function prevCardInfo() {
	if (id === 1) return
	id--
	fetchData(id)
}

function nextCardInfo() {
	if (id === 12) return
	id++
	fetchData(id)
}
