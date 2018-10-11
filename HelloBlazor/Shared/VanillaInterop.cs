using Microsoft.AspNetCore.Blazor;
using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace HelloBlazor
{
    public class VanillaInterop
    {
        public static Task<string> RenderListOfComponentsJS(int num)
        {
            // Implemented in js/list-of-components.js
            return JSRuntime.Current.InvokeAsync<string>(
                "renderListOfComponentsJS",
                num);
        }
    }
}
