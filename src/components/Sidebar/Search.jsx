import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	// Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Select,
	Textarea,
	Tooltip,
	useDisclosure,
	Link
} from "@chakra-ui/react";
import { SearchLogo } from "../../assets/constants";
import useSearchUsersPosts from "../../hooks/useSearchUsersPosts";
import { useRef, useState } from "react";
import SuggestedPost from "../SuggestedPosts/SuggestedPost";

const Search = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	// const searchRef = useRef(null);
	const { posts, isLoading, getPostDetails } = useSearchUsersPosts();
	const [selectedCategory, setSelectedCategory] = useState('');
	const [selectedCondition, setSelectedCondition] = useState('');

	const handleSearchPost = (e) => {
		e.preventDefault();
		getPostDetails(selectedCategory, selectedCondition);
	};

	console.log(posts);
	return (
		<>
			<Tooltip
				hasArrow
				label={"Search"}
				placement='right'
				ml={1}
				openDelay={500}
				display={{ base: "block", md: "none" }}
			>
				<Flex
					alignItems={"center"}
					gap={4}
					_hover={{ bg: "whiteAlpha.400" }}
					borderRadius={6}
					p={2}
					w={{ base: 10, md: "full" }}
					justifyContent={{ base: "center", md: "flex-start" }}
					onClick={onOpen}
				>
					<SearchLogo />
					<Box display={{ base: "none", md: "block" }}>Search</Box>
				</Flex>
			</Tooltip>

			<Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
				<ModalOverlay />
				<ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
					<ModalHeader>Search for posts</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<form onSubmit={handleSearchPost}>
							<FormControl>
								<FormLabel>Category</FormLabel>
								<Select placeholder="Select category" onChange={(e) => setSelectedCategory(e.target.value)} >
									<option value="Apparel">Apparel</option>
									<option value="Appliances">Appliances</option>
									<option value="Electronics">Electronics</option>
									<option value="Furniture">Furniture</option>
									<option value="Home Goods">Home Goods</option>
									<option value="Jewelry">Jewelry</option>
									<option value="Sporting Goods">Sporting Goods</option>
									<option value="Textbooks">Textbooks</option>
								</Select>
							</FormControl>

							<FormControl>
								<FormLabel  mt={4}>Condition</FormLabel>
								<Select placeholder="Select category" onChange={(e) => setSelectedCondition(e.target.value)} >
									<option value="New">New</option>
									<option value="Good ">Good</option>
									<option value="Fair">Fair</option>
									<option value="Poor">Poor</option>
								</Select>
							</FormControl>


							<Flex w={"full"} justifyContent={"flex-end"}>
								<Button type='submit' ml={"auto"} size={"sm"} my={4} isLoading={isLoading}>
									Search
								</Button>
							</Flex>
						</form>
						{posts && posts.map((post) => (
							<SuggestedPost key={post.id} post={post} />
						))}

					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
console.log(Search);

export default Search;

// COPY AND PASTE AS THE STARTER CODE FOR THE SEARCH COMPONENT
// import { Box, Flex, Tooltip } from "@chakra-ui/react";
// import { SearchLogo } from "../../assets/constants";

// const Search = () => {
// 	return (
// 		<>
// 			<Tooltip
// 				hasArrow
// 				label={"Search"}
// 				placement='right'
// 				ml={1}
// 				openDelay={500}
// 				display={{ base: "block", md: "none" }}
// 			>
// 				<Flex
// 					alignItems={"center"}
// 					gap={4}
// 					_hover={{ bg: "whiteAlpha.400" }}
// 					borderRadius={6}
// 					p={2}
// 					w={{ base: 10, md: "full" }}
// 					justifyContent={{ base: "center", md: "flex-start" }}
// 				>
// 					<SearchLogo />
// 					<Box display={{ base: "none", md: "block" }}>Search</Box>
// 				</Flex>
// 			</Tooltip>
// 		</>
// 	);
// };

// export default Search;