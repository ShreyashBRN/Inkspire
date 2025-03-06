#include <bits/stdc++.h>
using namespace std;

int main() {
    long long int t;
    cin >> t;
    
    while (t--) {
        long long int n, m, p;
        cin >> n >> m;
        if(n < m || (n % 3 != 0 && n != m)){
            cout << "NO\n";
            continue;
        }
        vector <int> a(1);
        a[0] = n;
        p = (n / 3);
        bool k = false;
        while(a[0] % 3 == 0){
            a.insert(a.begin() + 1, 2 * p);
            a.insert(a.begin() + 2, p);
            a.erase(a.begin());
            if(find(a.begin(), a.end(), m) != a.end()){
                k = true;
                break;
            } 
            p = (a[0] / 3);
        }
        for(int i = 0;i < a.size(); i++){
            cout << a[i] << " ";
        }
        cout << endl;
        
        // if(k = true || n == m){
        //     cout << "YES\n";
        // }
        // else{
        //     cout << "NO\n";
        // }
    }
}
