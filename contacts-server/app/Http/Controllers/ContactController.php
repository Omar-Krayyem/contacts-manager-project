<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Exception;


class ContactController extends Controller
{
    function getAll(){
        try{    
            $contact = Contact::get();
            return $this->customResponse($contact);
        }catch(Exception $e){
            return self::customResponse($e->getMessage(),'error',500);
        }
    }

    public function getById($id) {
        try {
            $contact = Contact::find($id);
    
            if (!$contact) {
                return $this->customResponse(null, 'Contact not found', 404);
            }
    
            return $this->customResponse($contact);
        } catch(Exception $e) {
            return $this->customResponse($e->getMessage(), 'error', 500);
        }
    }

    function store(Request $request_info){
        try{   
           $validated_data = $this->validate($request_info, [
                'name' => ['required','string', 'unique:contacts'],
                'phone' => ['required','numeric'],
                'latitude' => ['required','numeric'],
                'longtude' => ['required','numeric'],
            ]); 

            $contact = Contact::create($validated_data);

            return $this->customResponse($contact, 'Product Created Successfully');
        }catch(Exception $e){
            return self::customResponse($e->getMessage(),'error',500);
        }
    }

    function destroy($id){
        try{
            $contact = Contact::find($id)->delete();
            return $this->customResponse($contact, 'Deleted Successfully');
        }catch(Exception $e){
            return self::customResponse($e->getMessage(),'error',500);
        }
    }

    function update(Request $request_info){
        try{
            $contact = Contact::find($request_info->id);
            $contact->name = $request_info->name;
            $contact->phone = $request_info->phone;
            $contact->latitude = $request_info->latitude;
            $contact->longtude = $request_info->longtude;
            $contact->save();

            return $this->customResponse($contact, 'Updated Successfully');
        }catch(Exception $e){
            return self::customResponse($e->getMessage(),'error',500);
        }
    }

    function customResponse($data, $status = 'success', $code = 200){
        $response = ['status' => $status,'data' => $data];
        return response()->json($response,$code);
    }
}
