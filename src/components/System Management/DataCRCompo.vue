<template>
  <SidebarCompo>
    <div class="card mainCompo p-3" >
      <form @submit.prevent="uploadImage">
        <div class="row">
          <div class="col-lg-4 col-md-12">
            <div class="mb-3">
              <label for="edtxtNameCrAr" class="form-label custom-font-size">{{ $t('name_cr_ar') }}</label>
              <input v-model="nameCrAr" type="text" class="form-control" id="edtxtNameCrAr" @invalid="handleInvalidNameCrAr" @input="clearCustomValidity" required>

            </div> <!--name CR ar-->
            <div class="mb-3">
              <label for="edtxtNoteCrAr" class="form-label custom-font-size">{{ $t('note_cr_ar') }}</label>
              <input v-model="noteCrAr" type="text" class="form-control" id="edtxtNoteCrAr" @invalid="handleInvalidNoteCrAr" @input="clearCustomValidity" required>
            </div> <!--notes CR ar-->
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="mb-3 text-center">
              <label for="selectImageCr" class="form-label custom-font-size">{{ $t('image_cr') }}</label>
              <input type="file" class="form-control" style="height: 150px;" @change="onFileChange" accept="image/*" v-if="!selectedFile" @invalid="handleInvalidImageCr" @input="clearCustomValidity" required/>
              <div class="mb-3" v-if="imageSrc">
                <img class="border border-secondary p-1 mb-2" :src="imageSrc" alt="Uploaded Image" style="max-width: 300px; max-height: 150px;" @change="onFileChange"/>

                <!-- Remove Button -->
                <div class="btn btn-danger form-control" @click="removeImage">{{ $t('delete_button') }}</div>
              </div>
            </div> <!--image cr-->
            <div class="mb-3">
              <label for="edtxtTaxIdentificationNumber"
                     class="form-label custom-font-size">{{ $t('tax_identification_number') }}</label>
              <input v-model="taxIdentificationNumber" type="text" class="form-control" id="edtxtTaxIdentificationNumber" @invalid="handleInvalidTaxID" @input="clearCustomValidity" required>
            </div> <!--tax CR-->
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="mb-3">
              <label for="edtxtNameCrEn" class="form-label custom-font-size">{{ $t('name_cr_en') }}</label>
              <input v-model="nameCrEn" type="text" class="form-control" id="edtxtNameCrEn" @invalid="handleInvalidNameCrEn" @input="clearCustomValidity" required>
            </div> <!--name cr en-->
            <div class="mb-3">
              <label for="edtxtNoteCrEn" class="form-label custom-font-size">{{ $t('note_cr_en') }}</label>
              <input v-model="noteCrEn" type="text" class="form-control" id="edtxtNoteCrEn" @invalid="handleInvalidNoteCrEn" @input="clearCustomValidity" required>
            </div> <!--note cr en-->
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="mb-3">
              <label for="edtxtNoteAtTheEnd" class="form-label custom-font-size">{{ $t('note_at_the_end_invcoie') }}</label>
              <textarea v-model="noteAtTheEndInvcoie" type="text" class="form-control" id="edtxtTaxIdentificationNumber" rows="5" :placeholder="t('you_can_write_note_in_this_place')" @invalid="handleInvalidNoteEndInvoice" @input="clearCustomValidity" required></textarea>
            </div> <!--notes at the end of invoice pos-->
          </div>
          <div class="col-lg-4 col-md-12">

          </div>
          <div class="col-lg-4 col-md-12">
            <div class="mb-3">
              <label for="edtxtTitleThatAppear" class="form-label custom-font-size">{{$t('title_that_appear_at_the_end_A4')}}</label>
              <textarea v-model="titleThatAppearAtTheEndA4" type="text" class="form-control" id="edtxtNameCrEn" rows="5" :placeholder="t('you_can_write_note_in_this_place')" @invalid="handleInvalidTitleAppearEndA4" @input="clearCustomValidity" required></textarea>
            </div> <!--title that appear at the end of A4-->
          </div>
        </div>
        <button type="submit" class="btn btn-primary form-control text-capitalize">{{$t('update_button')}}</button>
      </form>

    </div>
  </SidebarCompo>
</template>

<script setup>
import SidebarCompo from "@/components/SideNav/SidebarCompo.vue";
import {onMounted, ref} from "vue";
import {useI18n} from "vue-i18n";
import axios from "axios";
import Cookies from "js-cookie";
import {showToast} from "@/services/customToast";


const { t } = useI18n()
const token = Cookies.get('tokenOfUser')
const selectedFile = ref(null);
const listOfCompanyInfo = ref([]);

const idCompanyInfo = ref(0)
const nameCrAr = ref('')
const noteCrAr = ref('')
const imageCr = ref('') // this var for store image from API
const taxIdentificationNumber = ref('')
const nameCrEn = ref('')
const noteCrEn = ref('')
const noteAtTheEndInvcoie = ref('')
const titleThatAppearAtTheEndA4 = ref('')
const imageSrc = ref(''); // this var for check the type of image from frontend and backend



const onFileChange = (event) => {
  const file = event.target.files[0];

  if (file) {
    selectedFile.value = file;

    // Generate a preview URL
    const reader = new FileReader();
    reader.onload = () => {
      const mimeType = detectMimeType(reader.result)
      imageSrc.value = `data:${mimeType};base64,${reader.result.split(',')[1]}`;
    };
    reader.readAsDataURL(file);
  }
};

// Function to remove the image
const removeImage = () => {
  selectedFile.value = null;
  imageSrc.value = null;
};

const uploadImage = async () => {

  if (!imageSrc.value){
    alert('Please select an image first!');
  }

  try {
    const response = await axios.put(
        `http://192.168.100.135:8000/v1/api/update/companyinfo/${idCompanyInfo.value}`,
        {
          id: idCompanyInfo.value,
          companyname: nameCrAr.value,
          country: noteCrAr.value,
          box: taxIdentificationNumber.value,
          companynamee: nameCrEn.value,
          countrye: noteCrEn.value,
          pos_bottomtext: noteAtTheEndInvcoie.value,
          address: titleThatAppearAtTheEndA4.value,
          compheader: imageSrc.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
    );

    // Handle the response here
    console.log('Success:', response.data);

    if (response.status === 200 && response.data.status === 'success') {
      setTimeout(() => {
        showToast(t('updated_successfully'), 'success');
      }, 1000);
    }

  } catch (error) {
    if (error.response) {
      // Handle 4xx and 5xx status codes
      console.log('Error status:', error.response.status);
      console.log('Error message:', error.response.data.message);
      console.log('Error details:', error.response.data.errors);
    } else if (error.request) {
      // Handle network errors or no response from the server
      console.log('Error with request:', error.request);
    } else {
      // Handle other types of errors
      console.log('Error:', error.message);
    }
  }

};

// Handle the 'invalid' event for the select element

const handleInvalidNameCrAr = (event) => {
  event.target.setCustomValidity(t("please_write_name_cr_ar"));
};
const handleInvalidNoteCrAr = (event) => {
  event.target.setCustomValidity(t("please_write_note_cr_ar"));
};
const handleInvalidImageCr = (event) => {
  event.target.setCustomValidity(t("please_choose_image_cr"));
  // errors.value.branchId = event.target.validationMessage;
};
const handleInvalidTaxID = (event) => {
  event.target.setCustomValidity(t("please_write_tax_id"));
  // errors.value.branchId = event.target.validationMessage;
};
const handleInvalidNoteEndInvoice = (event) => {
  event.target.setCustomValidity(t("please_write_note_end_invoice"));
  // errors.value.branchId = event.target.validationMessage;
};

const handleInvalidTitleAppearEndA4 = (event) => {
  event.target.setCustomValidity(t("please_write_title_appear_end_a4"));
  // errors.value.branchId = event.target.validationMessage;
};

const handleInvalidNameCrEn = (event) => {
  event.target.setCustomValidity(t("please_write_name_cr_en"));
};
const handleInvalidNoteCrEn = (event) => {
  event.target.setCustomValidity(t("please_write_note_cr_en"));
};

const clearCustomValidity = (event) => {
  event.target.setCustomValidity("");
};

function detectMimeType(base64String) { // this fun for detect the base64 image type
  if (base64String.startsWith('iVBORw0KGgo')) return 'image/png';
  if (base64String.startsWith('/9j/')) return 'image/jpeg';
  if (base64String.startsWith('R0lGOD')) return 'image/gif';
  return 'application/octet-stream';
}




// End Handle the 'invalid' event for the select element
onMounted(async ()=>{


  const resultOfCompanyInfo = await axios.get(
      `http://192.168.100.135:8000/v1/api/companyinfo/all/`,
      {
        headers:{
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        }
      }
  );


  if (resultOfCompanyInfo.status === 200 && resultOfCompanyInfo.data.status === 'success') {
    listOfCompanyInfo.value = resultOfCompanyInfo.data.data;
    idCompanyInfo.value = listOfCompanyInfo.value[0].id;
    nameCrAr.value = listOfCompanyInfo.value[0].companyname;
    noteCrAr.value = listOfCompanyInfo.value[0].country;
    taxIdentificationNumber.value = listOfCompanyInfo.value[0].box;
    nameCrEn.value = listOfCompanyInfo.value[0].companynamee;
    noteCrEn.value = listOfCompanyInfo.value[0].countrye;
    noteAtTheEndInvcoie.value = listOfCompanyInfo.value[0].pos_bottomtext;
    titleThatAppearAtTheEndA4.value = listOfCompanyInfo.value[0].address;
    imageCr.value = listOfCompanyInfo.value[0].compheader;
    const mimeType = detectMimeType(imageCr.value)
    imageSrc.value = `data:${mimeType};base64,${imageCr.value}`;
    selectedFile.value = imageCr.value !== null;

  }



});



</script>

<style lang="css" scoped>

.mainCompo{
  margin: 70px 20px 0 20px;
}


@media (max-width: 1024px) {

}


@media (max-width: 768px) {

}

@media (max-width: 480px) {

}

</style>