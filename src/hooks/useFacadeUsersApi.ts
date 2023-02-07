import axios, { AxiosError } from "axios";
import { useState } from "react";
import { API_URL, FAKE_API_URL } from "../consts";
import { SortingHelper } from "../helpers";
import { User } from "../types";

export const useFacadeUserAPI = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<any>(null);
  const [actionExecuting, setActionExecuting] = useState<boolean>(false);

  async function getUsers() {
    setActionExecuting(true);
    try {
      const response = await axios.get(
        API_URL
        // FAKE_API_URL
      );

      const newUsers = response.data?.map((user: any) => ({
        ...user,
        city: user.address.city,
      }));

      setUsers(newUsers);
    } catch (error) {
      const err = error as AxiosError;
      setError(err);
    } finally {
      setActionExecuting(false);
    }
  }

  async function createUser(newUser: any) {
    setActionExecuting(true);
    try {
      // await axios.post(FAKE_API_URL, user);
      const sortedUsers = [...users].sort(SortingHelper.compareById);
      const fakeNewId = (sortedUsers.at(-1)?.id || 0) + 1;

      setUsers([...users, { ...newUser, id: fakeNewId }]);
    } catch (error) {
      const err = error as AxiosError;
      setError(err);
    } finally {
      setActionExecuting(false);
    }
  }

  async function editUser(editedUser: User) {
    setActionExecuting(true);
    try {
      // await axios.put(FAKE_API_URL, user);
      const newUsers = [...users];
      const objIndex = users.findIndex((obj) => obj.id === editedUser.id);
      newUsers[objIndex] = editedUser;

      setUsers(newUsers);
    } catch (error) {
      const err = error as AxiosError;
      setError(err);
    } finally {
      setActionExecuting(false);
    }
  }

  async function deleteUser(id: string) {
    setActionExecuting(true);
    try {
      // await axios.delete(`${FAKE_API_URL}/${id}`);

      setUsers(users.filter((user: any) => user.id !== id));
    } catch (error) {
      const err = error as AxiosError;
      setError(err);
    } finally {
      setActionExecuting(false);
    }
  }

  return {
    users,
    error,
    actionExecuting,
    getUsers,
    createUser,
    editUser,
    deleteUser,
  };
};
