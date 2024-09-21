import { QueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function UseEditCabin() {
  const queryClient = new QueryClient();
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries(["cabins"]);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editCabin, isEditing };
}
