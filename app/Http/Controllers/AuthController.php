namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Validate and create user
        // Return token
    }

    public function login(Request $request)
    {
        // Validate and authenticate user
        // Return token
    }

    public function logout()
    {
        // Invalidate user's token
    }
}