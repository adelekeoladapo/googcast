<?


/**
 * Description of Admin
 *
 * @author Adeleke Oladapo
 */
class Admin extends CI_Controller {
    
    function index(){
        $this->load->view('admin/home');
    }
    
    function show_login(){
        $this->load->view('admin/login');
    }
    
}

?>