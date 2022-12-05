import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from 'react-native';

const PostRequestExample = ({ email, password }) => {

	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ "email": email, "password": password })
	};

	const postExample = async () => {
		try {
			await fetch(
				'http://localhost:3000/login', requestOptions)
				.then(response => {
					response.json()
						.then(data => {
							Alert.alert("Post created at : ",
							data.createdAt);
						});
				})
		}
		catch (error) {
			console.error(error);
		}
	}
	
    postExample()

}

export default PostRequestExample;

const styles = StyleSheet.create({
	btn: {
		marginTop: 60,
		marginLeft: 30,
		marginRight: 30
	}
})
